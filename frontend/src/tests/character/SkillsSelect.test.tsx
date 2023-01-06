import { fireEvent, screen, within } from "@testing-library/react";
import { SkillsSelect } from "../../components/character/SkillsSelect.js";
import { renderWithProviders } from "../../utils/TestingUtils.js";

test("Skills increase", () => {
  renderWithProviders(
    <SkillsSelect
      skillPoints={{ skillPoints: 100, skillGroupPoints: 0 }}
      skillSelections={[]}
    />
  );
  const combatSelect: HTMLSelectElement = screen.getByLabelText("Archery");

  // fireEvent.change(combatSelect, {
  //   target: {
  //     value: "2",
  //   },
  // });
  // expect(combatSelect.value).toContain("2");
  const physicalSelect: HTMLSelectElement = screen.getByLabelText("Disguise");
  const socialSelect: HTMLSelectElement = screen.getByLabelText("Con");
  const magicSelect: HTMLSelectElement = screen.getByLabelText("Alchemy");
  const resonanceSelect: HTMLSelectElement = screen.getByLabelText("Compiling");
  const technicalSelect: HTMLSelectElement = screen.getByLabelText("Compiling");
  const vehicleSelect: HTMLSelectElement = screen.getByLabelText("Compiling");
});
