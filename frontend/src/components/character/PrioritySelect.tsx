import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import uniqid from "uniqid";
import {
  PrioritiesEnum,
  MagicTypeEnum,
  MagicTypes,
  MetatypeEnum,
  PriorityLevelEnum,
  priorityOptions,
} from "./PriorityImports.js";
import type {
  IMagicInfo,
  IPriorities,
  IPriorityRow,
  ISkillPoints,
  PriorityLevelKey,
} from "./PriorityImports.js";

const columnHelper = createColumnHelper<IPriorityRow>();

const columns = [
  columnHelper.accessor("priority", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("metatypeInfo", {
    header: "Metatype",
    cell: (info) => {
      return info.getValue().map((line) => (
        <ul>
          <li key={uniqid()}>
            {line.metatype + " (" + line.specialAttributes + ")"}
          </li>
        </ul>
      ));
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("attributes", {
    header: "Attributes",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("magicInfo", {
    header: "Magic or Resonance",
    cell: (info) => {
      return info.getValue().map((line) => {
        const magicianLine = formatMagic(line);
        return (
          <ul>
            <li key={uniqid()}>{magicianLine}</li>
          </ul>
        );
      });
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("skills", {
    header: "Skills",
    cell: (info) => {
      return formatSkills(info.getValue());
    },

    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("resources", {
    header: "Resources",
    cell: (info) => {
      return formatResources(info.getValue());
    },
    footer: (info) => info.column.id,
  }),
];

const PrioritiesTable = function () {
  // useReactTable can't use defaultData directly for some reason...
  const data = [...priorityOptions];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {/* https://github.com/TanStack/table/issues/4580 */}
      {/* <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody> */}
    </table>
  );
};

const metatypeSummaries = [
  "A - Any metatype",
  "B - Any metatype",
  "C - Human, Dwarf, Elf, or Ork",
  "D - Human or Elf",
  "E - Human",
];

const attributesSummaries = priorityOptions.map(
  (priorityList) =>
    PriorityLevelEnum[priorityList.priority] + " - " + priorityList.attributes
);

const magicSummaries = [
  "A - Magician or Technomancer",
  "B - Adept, Magician, or Technomancer",
  "C - Adept, Magician, or Technomancer",
  "D - Adept or Aspected Magician",
  "E - Mundane",
];
const skillsSummaries = priorityOptions.map(
  (priorityList) =>
    PriorityLevelEnum[priorityList.priority] +
    " - " +
    formatSkills(priorityList.skills)
);
const resourcesSummaries = priorityOptions.map((priorityList) => {
  return (
    PriorityLevelEnum[priorityList.priority] +
    " - " +
    formatResources(priorityList.resources)
  );
});

interface IProps {
  priorityInfo: IPriorities;
  setPriorityInfo: (loadingPriorities: IPriorities) => void;
}

const PrioritySelect = function (props: IProps) {
  const priorityLevels: Array<PriorityLevelEnum> = [
    props.priorityInfo.MetatypePriority,
    props.priorityInfo.AttributesPriority,
    props.priorityInfo.MagicPriority,
    props.priorityInfo.SkillsPriority,
    props.priorityInfo.ResourcesPriority,
  ];
  const [priorities, setPriorities] = useState(priorityLevels);
  // Todo: add css effect when another option changes so it is obvious which other column was affected
  function changePriorities(column: PrioritiesEnum, newPriorityString: string) {
    const newPriority =
      PriorityLevelEnum[newPriorityString as PriorityLevelKey];
    const newPriorities = [...priorities];
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] === newPriority) {
        newPriorities[i] = newPriorities[column];
        newPriorities[column] = newPriority;
        break;
      }
    }

    const metatypeRow = priorityOptions.find(
      (row) => row.priority === newPriorities[PrioritiesEnum.Metatype]
    );

    const priority = props.priorityInfo;
    if (
      priorities[PrioritiesEnum.Metatype] !==
      newPriorities[PrioritiesEnum.Metatype]
    ) {
      setMetatypeOptions(
        metatypeRow?.metatypeInfo.map(
          (metaOption) =>
            metaOption.metatype + " (" + metaOption.specialAttributes + ")"
        ) || ["Error"]
      );
      setMetatypeSelection(MetatypeEnum.Human);
      priority.MetatypeSubselection = MetatypeEnum.Human;
    }
    const magicRow = priorityOptions.find(
      (row) => row.priority === newPriorities[PrioritiesEnum.Magic]
    );
    let magicArray: Array<string>;
    if (!magicRow) {
      magicArray = ["Error"];
    } else {
      magicArray = magicRow.magicInfo.map((line) => {
        return formatMagic(line);
      });
    }
    if (
      priorities[PrioritiesEnum.Magic] !== newPriorities[PrioritiesEnum.Magic]
    ) {
      setMagicOptions(magicArray);
      setMagicSelection(0);
      priority.MagicSubselection = 0;
    }

    priority.MetatypePriority = newPriorities[PrioritiesEnum.Metatype];
    priority.AttributesPriority = newPriorities[PrioritiesEnum.Attributes];
    priority.MagicPriority = newPriorities[PrioritiesEnum.Magic];
    priority.SkillsPriority = newPriorities[PrioritiesEnum.Skills];
    priority.ResourcesPriority = newPriorities[PrioritiesEnum.Resources];
    props.setPriorityInfo(priority);
    setPriorities(newPriorities);
  }

  const [metatypeOptions, setMetatypeOptions] = useState(() => {
    const row = priorityOptions.find(
      (row) => row.priority === priorities[PrioritiesEnum.Metatype]
    );
    return (
      row?.metatypeInfo.map(
        (metaOption) =>
          metaOption.metatype + " (" + metaOption.specialAttributes + ")"
      ) || ["Error"]
    );
  });
  const [metatypeSelection, setMetatypeSelection] = useState<MetatypeEnum>(
    props.priorityInfo.MetatypeSubselection
  );
  const [magicOptions, setMagicOptions] = useState(() => {
    const row = priorityOptions.find(
      (row) => row.priority === priorities[PrioritiesEnum.Magic]
    );
    if (!row) return ["Error"];
    return row.magicInfo.map((line) => {
      return formatMagic(line);
    });
  });
  const [magicSelection, setMagicSelection] = useState<MagicTypeEnum>(
    props.priorityInfo.MagicSubselection
  );

  return (
    <React.Fragment>
      <PrioritiesTable />
      <div>
        <div>
          <label htmlFor="metatype">Metatype:</label>
          <Dropdown
            options={metatypeSummaries}
            value={metatypeSummaries[priorities[PrioritiesEnum.Metatype]]}
            onChange={(arg) =>
              changePriorities(
                PrioritiesEnum.Metatype,
                arg.value.substring(0, 1)
              )
            }
            placeholder={"Select an option"}
            className="metatype"
          />

          <Dropdown
            options={metatypeOptions}
            value={metatypeOptions[metatypeSelection]}
            onChange={(arg) => {
              const temp = metatypeOptions.findIndex(
                (row) => row === arg.value
              );
              setMetatypeSelection(temp);
              const priority = props.priorityInfo;
              priority.MetatypeSubselection = temp;
              props.setPriorityInfo(priority);
            }}
            placeholder={"Select an option"}
            className="metatypeOptions"
          />
        </div>
        <div>
          <label htmlFor="attributes">Attributes:</label>
          <Dropdown
            options={attributesSummaries}
            value={attributesSummaries[priorities[PrioritiesEnum.Attributes]]}
            onChange={(arg) =>
              changePriorities(
                PrioritiesEnum.Attributes,
                arg.value.substring(0, 1)
              )
            }
            placeholder={"Select an option"}
            className="attributes"
          />
        </div>
        <div>
          <label htmlFor="magic">Magic:</label>
          <Dropdown
            options={magicSummaries}
            value={magicSummaries[priorities[PrioritiesEnum.Magic]]}
            onChange={(arg) =>
              changePriorities(PrioritiesEnum.Magic, arg.value.substring(0, 1))
            }
            placeholder={"Select an option"}
            className="magic"
          />

          <Dropdown
            options={magicOptions}
            value={magicOptions[magicSelection]}
            onChange={(arg) => {
              const row = magicOptions.findIndex((row) => row === arg.value);
              setMagicSelection(row);
              const priority = props.priorityInfo;
              priority.MagicSubselection = row;
              props.setPriorityInfo(priority);
            }}
            placeholder={"Select an option"}
            className="magicOptions"
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <Dropdown
            options={skillsSummaries}
            value={skillsSummaries[priorities[PrioritiesEnum.Skills]]}
            onChange={(arg) =>
              changePriorities(PrioritiesEnum.Skills, arg.value.substring(0, 1))
            }
            placeholder={"Select an option"}
            className="skills"
          />
        </div>
        <div>
          <label htmlFor="resources">Resources:</label>
          <Dropdown
            options={resourcesSummaries}
            value={resourcesSummaries[priorities[PrioritiesEnum.Resources]]}
            onChange={(arg) =>
              changePriorities(
                PrioritiesEnum.Resources,
                arg.value.substring(0, 1)
              )
            }
            placeholder={"Select an option"}
            className="resources"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrioritySelect;

function formatMagic(line: IMagicInfo) {
  let magicResonance = "Magic";
  let spellsForms = "Spells, rituals, and/or alchemical preparations";
  if (line.magicType === MagicTypes[MagicTypeEnum.NotAwakened]) {
    return "N/A";
  } else if (line.magicType === MagicTypes[MagicTypeEnum.Technomancer]) {
    magicResonance = "Resonance";
    spellsForms = "Complex forms";
  }
  // Insert space between words
  const magicType = line.magicType.replace(/[A-Z]/g, " $&").trim();
  let magicianLine = magicType + ": " + magicResonance + " " + line.magicRating;
  if (line.other.length > 0) {
    magicianLine += ", " + line.other;
  }
  if (line.spells > 0) {
    magicianLine += ", " + line.spells + " " + spellsForms;
  }
  return magicianLine;
}

function formatSkills(line: ISkillPoints) {
  return line.skillPoints + "/" + line.skillGroupPoints;
}

function formatResources(line: number) {
  // toLocaleString adds commas to number
  return line.toLocaleString() + "¥";
}
