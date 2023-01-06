import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/TestingUtils.js";
import CharacterCreator from "../../components/character/CharacterCreator.js";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  __esModule: true,
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => jest.clearAllMocks());

test("Default display", () => {
  renderWithProviders(<CharacterCreator />);
  showPage1();
});

test("Change page to attributes", () => {
  renderWithProviders(<CharacterCreator />);

  const next: HTMLButtonElement = screen.getByText("Next");
  fireEvent.click(next);

  showPage2();
});

test("Change page to qualities", () => {
  renderWithProviders(<CharacterCreator />);

  const next: HTMLButtonElement = screen.getByText("Next");
  fireEvent.click(next);
  fireEvent.click(next);

  showPage3();
});

test("Change page to skills", () => {
  renderWithProviders(<CharacterCreator />);

  const next: HTMLButtonElement = screen.getByText("Next");
  fireEvent.click(next);
  fireEvent.click(next);
  fireEvent.click(next);

  showPage4();
});

test("Change page back to default", () => {
  renderWithProviders(<CharacterCreator />);

  const next: HTMLButtonElement = screen.getByText("Next");
  const previous: HTMLButtonElement = screen.getByText("Previous");
  fireEvent.click(next);
  fireEvent.click(next);
  fireEvent.click(next);
  fireEvent.click(previous);
  showPage3();
  fireEvent.click(previous);
  showPage2();
  fireEvent.click(previous);
  showPage1();
});

function showPage1() {
  const metatypeSel: HTMLSelectElement = screen.getByTestId("metatype");
  const metatypeOptionsSelect: HTMLSelectElement =
    screen.getByTestId("metatypeOptions");
  const attributesSelect: HTMLSelectElement = screen.getByTestId("attributes");
  const magicSelect: HTMLSelectElement = screen.getByTestId("magic");
  const magicOptionsSelect: HTMLSelectElement =
    screen.getByTestId("magicOptions");
  const skillsSelect: HTMLSelectElement = screen.getByTestId("skills");
  const resourcesSelect: HTMLSelectElement = screen.getByTestId("resources");

  expect(screen.getByText("Metatype:")).toBeInTheDocument();
  expect(metatypeSel).toBeInTheDocument();
  expect(metatypeOptionsSelect).toBeInTheDocument();
  expect(screen.getByText("Attributes:")).toBeInTheDocument();
  expect(attributesSelect).toBeInTheDocument();
  expect(screen.getByText("Magic:")).toBeInTheDocument();
  expect(magicSelect).toBeInTheDocument();
  expect(magicOptionsSelect).toBeInTheDocument();
  expect(screen.getByText("Skills:")).toBeInTheDocument();
  expect(skillsSelect).toBeInTheDocument();
  expect(screen.getByText("Resources:")).toBeInTheDocument();
  expect(resourcesSelect).toBeInTheDocument();
}

function showPage2() {
  const bodySelect: HTMLSelectElement = screen.getByTestId("body");
  const agilitySelect: HTMLSelectElement = screen.getByTestId("agility");
  const reactionSelect: HTMLSelectElement = screen.getByTestId("reaction");
  const stengthSelect: HTMLSelectElement = screen.getByTestId("strength");
  const willpowerSelect: HTMLSelectElement = screen.getByTestId("willpower");
  const logicSelect: HTMLSelectElement = screen.getByTestId("logic");
  const intuitionSelect: HTMLSelectElement = screen.getByTestId("intuition");
  const charismaSelect: HTMLSelectElement = screen.getByTestId("charisma");
  const edgeSelect: HTMLSelectElement = screen.getByTestId("edge");

  expect(screen.getByText(/body - /i)).toBeInTheDocument();
  expect(bodySelect).toBeInTheDocument();
  expect(screen.getByText(/agility - /i)).toBeInTheDocument();
  expect(agilitySelect).toBeInTheDocument();
  expect(screen.getByText(/reaction - /i)).toBeInTheDocument();
  expect(reactionSelect).toBeInTheDocument();
  expect(screen.getByText(/strength - /i)).toBeInTheDocument();
  expect(stengthSelect).toBeInTheDocument();
  expect(screen.getByText(/willpower - /i)).toBeInTheDocument();
  expect(willpowerSelect).toBeInTheDocument();
  expect(screen.getByText(/logic - /i)).toBeInTheDocument();
  expect(logicSelect).toBeInTheDocument();
  expect(screen.getByText(/intuition - /i)).toBeInTheDocument();
  expect(intuitionSelect).toBeInTheDocument();
  expect(screen.getByText(/charisma - /i)).toBeInTheDocument();
  expect(charismaSelect).toBeInTheDocument();
  expect(screen.getByText(/edge - /i)).toBeInTheDocument();
  expect(edgeSelect).toBeInTheDocument();
}

function showPage3() {
  const positiveSelect: HTMLSelectElement =
    screen.getByTestId("newPositiveQuality");
  const negativeSelect: HTMLSelectElement =
    screen.getByTestId("newNegativeQuality");

  expect(screen.getByText(/Positive Qualities/i)).toBeInTheDocument();
  expect(positiveSelect).toBeInTheDocument();
  expect(screen.getByText(/Negative Qualities/i)).toBeInTheDocument();
  expect(negativeSelect).toBeInTheDocument();
}

function showPage4() {
  expect(screen.getByText(/Combat Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Physical Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Social Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Magical Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Resonance Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Technical Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Vehicle Skills/i)).toBeInTheDocument();
}
