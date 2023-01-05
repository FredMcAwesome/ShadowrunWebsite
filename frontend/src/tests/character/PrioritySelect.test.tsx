import { fireEvent, screen, within } from "@testing-library/react";
import { renderWithProviders } from "../../utils/TestingUtils.js";
import PrioritySelect from "../../components/character/PrioritySelect.js";
import {
  PriorityLevelEnum,
  MetatypeEnum,
  MagicTypeEnum,
} from "../../components/character/PriorityImports.js";

test("Change metatype priority", () => {
  defaultPageRender();
  const metatypeSelect: HTMLSelectElement = screen.getByTestId("metatype");
  const resourcesSelect: HTMLSelectElement = screen.getByTestId("resources");
  const metatypeOptionsSelect: HTMLSelectElement =
    screen.getByTestId("metatypeOptions");
  expect(metatypeSelect.value).toContain("A - Any metatype");
  expect(within(metatypeOptionsSelect).getByText(/Troll/)).toBeInTheDocument();
  expect(resourcesSelect.value).toContain("E - ");

  fireEvent.change(metatypeSelect, {
    target: {
      value: (metatypeSelect[PriorityLevelEnum.E] as HTMLOptionElement).value,
    },
  });

  expect(metatypeSelect.value).not.toContain("A - Any metatype");
  expect(
    within(metatypeOptionsSelect).queryByText(/Troll/)
  ).not.toBeInTheDocument();
  expect(within(metatypeOptionsSelect).getByText(/Human/)).toBeInTheDocument();
  expect(resourcesSelect.value).not.toContain("E - ");
  expect(resourcesSelect.value).toContain("A - ");
});

test("Change metatype option", () => {
  defaultPageRender();
  const metatypeOptionsSelect: HTMLSelectElement =
    screen.getByTestId("metatypeOptions");
  expect(metatypeOptionsSelect.value).toContain("Human");

  fireEvent.change(metatypeOptionsSelect, {
    target: {
      value: (metatypeOptionsSelect[MetatypeEnum.Troll] as HTMLOptionElement)
        .value,
    },
  });

  expect(metatypeOptionsSelect.value).not.toContain("Human");
  expect(metatypeOptionsSelect.value).toContain("Troll");
});

test("Change attributes priority", () => {
  defaultPageRender();
  const attributesSelect: HTMLSelectElement = screen.getByTestId("attributes");
  const resourcesSelect: HTMLSelectElement = screen.getByTestId("resources");
  expect(attributesSelect.value).toContain("B - ");
  expect(resourcesSelect.value).toContain("E - ");

  fireEvent.change(attributesSelect, {
    target: {
      value: (attributesSelect[PriorityLevelEnum.E] as HTMLOptionElement).value,
    },
  });

  expect(attributesSelect.value).not.toContain("B - ");
  expect(attributesSelect.value).toContain("E - ");
  expect(resourcesSelect.value).not.toContain("E - ");
  expect(resourcesSelect.value).toContain("B - ");
});

test("Change magic priority", () => {
  defaultPageRender();
  const magicSelect: HTMLSelectElement = screen.getByTestId("magic");
  const resourcesSelect: HTMLSelectElement = screen.getByTestId("resources");
  expect(magicSelect.value).toContain("C - ");
  expect(resourcesSelect.value).toContain("E - ");

  fireEvent.change(magicSelect, {
    target: {
      value: (magicSelect[PriorityLevelEnum.E] as HTMLOptionElement).value,
    },
  });

  expect(magicSelect.value).not.toContain("C - ");
  expect(magicSelect.value).toContain("E - ");
  expect(resourcesSelect.value).not.toContain("E - ");
  expect(resourcesSelect.value).toContain("C - ");
});

test("Change magic option", () => {
  defaultPageRender();
  const magicOptionsSelect: HTMLSelectElement =
    screen.getByTestId("magicOptions");
  expect(magicOptionsSelect.value).toContain("Technomancer");
  const MAGICIAN = 0;

  fireEvent.change(magicOptionsSelect, {
    target: {
      value: (magicOptionsSelect[MAGICIAN] as HTMLOptionElement).value,
    },
  });

  expect(magicOptionsSelect.value).not.toContain("Technomancer");
  expect(magicOptionsSelect.value).toContain("Magician");
});

test("Change skills priority", () => {
  defaultPageRender();
  const skillsSelect: HTMLSelectElement = screen.getByTestId("skills");
  const resourcesSelect: HTMLSelectElement = screen.getByTestId("resources");
  expect(skillsSelect.value).toContain("D - ");
  expect(resourcesSelect.value).toContain("E - ");

  fireEvent.change(skillsSelect, {
    target: {
      value: (skillsSelect[PriorityLevelEnum.E] as HTMLOptionElement).value,
    },
  });

  expect(skillsSelect.value).not.toContain("D - ");
  expect(skillsSelect.value).toContain("E - ");
  expect(resourcesSelect.value).not.toContain("E - ");
  expect(resourcesSelect.value).toContain("D - ");
});

test("Change resources priority", () => {
  defaultPageRender();
  const resourcesSelect: HTMLSelectElement = screen.getByTestId("resources");
  const attributesSelect: HTMLSelectElement = screen.getByTestId("attributes");
  expect(resourcesSelect.value).toContain("E - ");
  expect(attributesSelect.value).toContain("B - ");

  fireEvent.change(resourcesSelect, {
    target: {
      value: (resourcesSelect[PriorityLevelEnum.B] as HTMLOptionElement).value,
    },
  });

  expect(resourcesSelect.value).not.toContain("E - ");
  expect(resourcesSelect.value).toContain("B - ");
  expect(attributesSelect.value).not.toContain("B - ");
  expect(attributesSelect.value).toContain("E - ");
});

function defaultPageRender() {
  const priorityInfo = {
    MetatypePriority: PriorityLevelEnum.A,
    MetatypeSubselection: MetatypeEnum.Human,
    AttributesPriority: PriorityLevelEnum.B,
    MagicPriority: PriorityLevelEnum.C,
    MagicSubselection: MagicTypeEnum.Magician,
    SkillsPriority: PriorityLevelEnum.D,
    ResourcesPriority: PriorityLevelEnum.E,
  };
  const { container } = renderWithProviders(
    <PrioritySelect priorityInfo={priorityInfo} setPriorityInfo={jest.fn()} />
  );
  return container;
}
