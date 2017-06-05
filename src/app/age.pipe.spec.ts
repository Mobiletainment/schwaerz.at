import { AgePipe } from "./age.pipe";

describe("AgePipe", () => {
  const pipe = new AgePipe();

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });


  it("should gracefully handle empty strings", () => {
    expect(pipe.transform("")).toBe("");
  });

  it("should handle empty values", () => {
    expect(pipe.transform(null)).toBe("");
  });

  it("should calculate age for current date string", () => {
    expect(pipe.transform(new Date().toDateString())).toBe("0");
  })

  it("should calculate age for date in the past", () => {
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    expect(pipe.transform(lastYear.toISOString())).toBe("1");
  })

  it("should calculate age for date in the future", () => {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    expect(pipe.transform(nextYear.toISOString())).toBe("1");
  })

});
