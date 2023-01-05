import { fireEvent, screen, waitFor, within } from "@testing-library/react";
import { useState } from "react";
import {
  ISelectedQuality,
  QualitiesSelect,
} from "../../components/character/QualitiesSelect.js";
import {
  IQuality,
  QualityEnum,
  firstNegativeQualityIndex,
  Qualities,
  QualitySubqualityEnum,
} from "../../data/Qualities.js";
import { renderWithProviders } from "../../utils/TestingUtils.js";

test("Choose positive quality", async () => {
  renderWithProviders(<DefaultPageRender />);
  const newPositiveQualitySelect: HTMLSelectElement =
    screen.getByTestId("newPositiveQuality");
  const karmaPoints: HTMLSpanElement = within(
    screen.getByText("Karma Remaining:")
  ).getByText("25");
  // can't check initial value due to the way the dropdown is mocked
  //expect(newPositiveQualitySelect.value).toContain("Select Quality");
  expect(karmaPoints.innerHTML).toContain("25");

  fireEvent.change(newPositiveQualitySelect, {
    target: {
      value: QualityEnum[QualityEnum.Apititude],
    },
  });
  expect(
    screen.getByTestId(QualityEnum[QualityEnum.Apititude])
  ).toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("11");
  const remove: HTMLButtonElement = screen.getByText("Remove");
  fireEvent.click(remove);
  expect(
    screen.queryByTestId(QualityEnum[QualityEnum.Apititude])
  ).not.toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("25");
});

test("Choose positive quality with variable karma", async () => {
  renderWithProviders(<DefaultPageRender />);
  const newPositiveQualitySelect: HTMLSelectElement =
    screen.getByTestId("newPositiveQuality");
  const karmaPoints: HTMLSpanElement = within(
    screen.getByText("Karma Remaining:")
  ).getByText("25");
  expect(karmaPoints.innerHTML).toContain("25");

  fireEvent.change(newPositiveQualitySelect, {
    target: {
      value: QualityEnum[QualityEnum.NaturalImmunity],
    },
  });
  expect(
    screen.getByTestId(QualityEnum[QualityEnum.NaturalImmunity])
  ).toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("25");

  const karmaSelector: HTMLSelectElement = screen.getByTestId(
    QualityEnum[QualityEnum.NaturalImmunity] + "_newCost"
  );
  expect(karmaSelector).toBeInTheDocument();

  fireEvent.change(karmaSelector, {
    target: {
      value: "10",
    },
  });
  expect(karmaSelector.value).toContain("10");
  expect(karmaPoints.textContent).toContain("15");
  const remove: HTMLButtonElement = screen.getByText("Remove");
  fireEvent.click(remove);
  expect(
    screen.queryByTestId(QualityEnum[QualityEnum.NaturalImmunity])
  ).not.toBeInTheDocument();
  expect(karmaSelector).not.toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("25");
});

test("Choose positive quality with variable rating", async () => {
  renderWithProviders(<DefaultPageRender />);
  const newPositiveQualitySelect: HTMLSelectElement =
    screen.getByTestId("newPositiveQuality");
  const karmaPoints: HTMLSpanElement = within(
    screen.getByText("Karma Remaining:")
  ).getByText("25");
  expect(karmaPoints.innerHTML).toContain("25");

  fireEvent.change(newPositiveQualitySelect, {
    target: {
      value: QualityEnum[QualityEnum.FocusedConcentration],
    },
  });
  expect(
    screen.getByTestId(QualityEnum[QualityEnum.FocusedConcentration])
  ).toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("25");

  const ratingSelector: HTMLSelectElement = screen.getByTestId(
    QualityEnum[QualityEnum.FocusedConcentration] + "_newRating"
  );
  expect(ratingSelector).toBeInTheDocument();
  fireEvent.change(ratingSelector, {
    target: {
      value: "2",
    },
  });
  expect(ratingSelector.value).toContain("2");
  expect(karmaPoints.textContent).toContain("17");

  const remove: HTMLButtonElement = screen.getByText("Remove");
  fireEvent.click(remove);
  expect(
    screen.queryByTestId(QualityEnum[QualityEnum.FocusedConcentration])
  ).not.toBeInTheDocument();
  expect(ratingSelector).not.toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("25");
});

test("Choose positive quality with subquality", async () => {
  renderWithProviders(<DefaultPageRender />);
  const newPositiveQualitySelect: HTMLSelectElement =
    screen.getByTestId("newPositiveQuality");
  const karmaPoints: HTMLSpanElement = within(
    screen.getByText("Karma Remaining:")
  ).getByText("25");
  expect(karmaPoints.innerHTML).toContain("25");

  fireEvent.change(newPositiveQualitySelect, {
    target: {
      value: QualityEnum[QualityEnum.HomeGround],
    },
  });
  expect(
    screen.getByTestId(QualityEnum[QualityEnum.HomeGround])
  ).toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("15");

  const subqualitySelector: HTMLSelectElement = screen.getByTestId(
    QualityEnum[QualityEnum.HomeGround] + "_newSubquality"
  );
  expect(subqualitySelector).toBeInTheDocument();
  fireEvent.change(subqualitySelector, {
    target: {
      value: "You Know a Guy",
    },
  });
  expect(subqualitySelector.value).toContain("You Know a Guy");
  expect(karmaPoints.textContent).toContain("15");

  const remove: HTMLButtonElement = screen.getByText("Remove");
  fireEvent.click(remove);
  expect(
    screen.queryByTestId(QualityEnum[QualityEnum.HomeGround] + "_newSubquality")
  ).not.toBeInTheDocument();
  expect(subqualitySelector).not.toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("25");
});

test("Choose quality with subquality varying cost", async () => {
  renderWithProviders(<DefaultPageRender />);
  const newNegativeQualitySelect: HTMLSelectElement =
    screen.getByTestId("newNegativeQuality");
  const karmaPoints: HTMLSpanElement = within(
    screen.getByText("Karma Remaining:")
  ).getByText("25");
  expect(karmaPoints.innerHTML).toContain("25");

  fireEvent.change(newNegativeQualitySelect, {
    target: {
      value: QualityEnum[QualityEnum.Addiction],
    },
  });
  expect(
    screen.getByTestId(QualityEnum[QualityEnum.Addiction])
  ).toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("25");

  const subqualitySelector: HTMLSelectElement = screen.getByTestId(
    QualityEnum[QualityEnum.Addiction] + "_newSubquality"
  );
  expect(subqualitySelector).toBeInTheDocument();
  fireEvent.change(subqualitySelector, {
    target: {
      value: "Mild/1 dose or 1 hour of habit-related activity",
    },
  });
  expect(subqualitySelector.value).toContain(
    "Mild/1 dose or 1 hour of habit-related activity"
  );
  expect(karmaPoints.textContent).toContain("29");

  const remove: HTMLButtonElement = screen.getByText("Remove");
  fireEvent.click(remove);
  expect(
    screen.queryByTestId(QualityEnum[QualityEnum.HomeGround] + "_newSubquality")
  ).not.toBeInTheDocument();
  expect(subqualitySelector).not.toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("25");
});

test("Choose negative quality", async () => {
  renderWithProviders(<DefaultPageRender />);
  const newNegativeQualitySelect: HTMLSelectElement =
    screen.getByTestId("newNegativeQuality");
  const karmaPoints: HTMLSpanElement = within(
    screen.getByText("Karma Remaining:")
  ).getByText("25");
  expect(karmaPoints.textContent).toContain("25");

  fireEvent.change(newNegativeQualitySelect, {
    target: {
      value: QualityEnum[QualityEnum.AstralBeacon],
    },
  });
  expect(
    screen.getByTestId(QualityEnum[QualityEnum.AstralBeacon])
  ).toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("35");

  const remove: HTMLButtonElement = screen.getByText("Remove");
  fireEvent.click(remove);
  expect(
    screen.queryByTestId(QualityEnum[QualityEnum.AstralBeacon])
  ).not.toBeInTheDocument();
  expect(karmaPoints.textContent).toContain("25");
});

function DefaultPageRender() {
  const [karma, setKarma] = useState(25);
  const changeKarma = function (newKarma: number) {
    setKarma(newKarma);
  };
  const [positiveArray, setPositiveArray] = useState<Array<ISelectedQuality>>(
    []
  );
  const changePositiveArray = function (array: Array<ISelectedQuality>) {
    setPositiveArray(array);
  };
  const [negativeArray, setNegativeArray] = useState<Array<ISelectedQuality>>(
    []
  );
  const changeNegativeArray = function (array: Array<ISelectedQuality>) {
    setNegativeArray(array);
  };

  return (
    <QualitiesSelect
      karmaPoints={karma}
      setKarmaPoints={changeKarma}
      positiveQualitiesSelected={positiveArray}
      setPositiveQualitiesSelected={changePositiveArray}
      negativeQualitiesSelected={negativeArray}
      setNegativeQualitiesSelected={changeNegativeArray}
    />
  );
}
