const parseFraction = (p: string) => {
    if (p === "") {
        return undefined;
    }
    try {
        const tryNumber = Number(p);
        if (!Number.isNaN(tryNumber)) {
            if (tryNumber >= 1) {
                return undefined;
            } else {
                return tryNumber;
            }
        } else {
            throw Error;
        }
    } catch {
        try {
            const re = /^\s*(\d+)\s*\/\s*(\d+)\s*$/;
            const match = re.exec(p);
            const firstMatch = match; // && match[0];
            if (firstMatch) {
                const numerator = firstMatch[1];
                const denominator = firstMatch[2];
                console.debug("matched", firstMatch, numerator, denominator);
                return Number(numerator) / Number(denominator);
            } else {
                return undefined;
            }
        } catch {
            return undefined;
        }
    }
};

export { parseFraction };