import { jest } from "@jest/globals"

function spyConsole() {
  return jest.spyOn(console, "log").mockImplementation(() => {})
}

export { spyConsole }
