import type { WeaponData } from "pipeline";
import { mergeData } from "../../Formula/api";
import { MainStatKey, SubstatKey } from "../../Types/artifact";
import { WeaponKey, WeaponTypeKey } from "../../Types/consts";
import _weaponCurves from "./expCurve_gen.json";
import { input } from "../../Formula";
import { Data, DisplaySub } from "../../Formula/type";
import { infoMut, prod, constant, subscript, sum } from "../../Formula/utils";

// TODO: Remove this conversion after changing the file format
const weaponCurves = Object.fromEntries(Object.entries(_weaponCurves).map(([key, value]) => [key, [0, ...Object.values(value)]]))

export function dataObjForWeaponSheet(
  key: WeaponKey,
  gen: WeaponData,
  substat2: MainStatKey | SubstatKey | "dmg_" | undefined = undefined,
  displayWeapon: DisplaySub = {},
  additional: Data = {}
): Data {
  const result: Data = {
    base: {},
    premod: {},
    total: {},
    weapon: {
      key: constant(key), type: constant(gen.weaponType),
    },
    display: {
      [`weapon:${key}`]: displayWeapon
    },
  }

  const { mainStat, subStat } = gen

  const mainStatNode = infoMut(sum(prod(mainStat.base, subscript(input.weapon.lvl, weaponCurves[mainStat.curve])), subscript(input.weapon.asc, gen.ascension.map(x => x.addStats[mainStat.type] ?? 0))), { key: mainStat.type, namePrefix: "Weapon" })
  result.base![mainStat.type] = mainStatNode
  result.weapon!.main = mainStatNode

  if (subStat) {
    const substatNode = infoMut(prod(subStat.base, subscript(input.weapon.lvl, weaponCurves[subStat.curve])), { key: subStat.type, namePrefix: "Weapon" })
    result.premod![subStat.type] = substatNode
    result.weapon!.sub = substatNode
  }
  if (substat2) {
    const substat2Node = subscript(input.weapon.refineIndex, gen.addProps.map(x => x[substat2] ?? NaN), { key: substat2, namePrefix: " Weapon" })
    result.weapon!.sub2 = substat2Node
    const node = substat2 !== subStat?.type
      ? input.weapon.sub2 : sum(input.weapon.sub, input.weapon.sub2)
    if (substat2 === "dmg_") {
      if (!result.total!.dmgBonus) result.total!.dmgBonus = {}
      result.total!.dmgBonus.hit = node
    } else result.premod![substat2] = node
  }

  return mergeData([result, additional])
}
