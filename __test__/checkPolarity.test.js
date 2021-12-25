import { checkPolarity } from "../src/client/js/checkPolarity";


test("checkPolarity is a function ", () => {
    expect(typeof checkPolarity).toBe("function")
})

test("checkPolarity returns", () => {
    expect(checkPolarity('P')).toBe("positive")
    expect(checkPolarity("P+")).toBe("strong positive")
    expect(checkPolarity("NEU")).toBe("neutral")
    expect(checkPolarity("N")).toBe("negative")
    expect(checkPolarity("N+")).toBe("strong negative")
    expect(checkPolarity("NONE")).toBe("without polarity")
})