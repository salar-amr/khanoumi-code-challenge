import { render, renderHook, screen } from "@testing-library/react";
import useToggler from ".";
import user from "@testing-library/user-event";
import { Btn } from "../../component/btn";
import { act } from "react-dom/test-utils";

test("render toggler hook", async () => {
  const { container } = render(<Btn />);

  const { result } = renderHook(useToggler, {
    initialProps: { visInitial: true, selector: "button" },
  });

  expect(result.current[0]).toBeTruthy();

  expect(typeof result.current[1]).toBe("function");

  const button = container.querySelector("button");

  expect(button.hidden).toBeTruthy();

  act(() => {
    result.current[1]();
  });

  expect(button.hidden).toBeFalsy();

  expect(result.current[0]).toBeFalsy();
});
