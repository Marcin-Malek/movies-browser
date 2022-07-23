export const formatDate = (releaseDate, to) => {
    const date = new Date(releaseDate);
    if (to === "year") {
        return date.getFullYear();
    }
    return date.toLocaleString(
        undefined,
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );
};