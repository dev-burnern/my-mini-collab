import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SetupPage from "./page";

describe("SetupPage", () => {
  it("renders required 5 onboarding steps", () => {
    render(<SetupPage />);

    expect(screen.getByText(/fork template/i)).toBeInTheDocument();
    expect(screen.getByText(/vercel import/i)).toBeInTheDocument();
    expect(screen.getByText(/env setup/i)).toBeInTheDocument();
    expect(screen.getByText(/db migration/i)).toBeInTheDocument();
    expect(screen.getByText(/workspace init/i)).toBeInTheDocument();
  });
});
