/**
 * Simple years calculation (your original formula)
 * @param startDate - Date string in YYYY-MM-DD format
 * @returns Number of years since the given date
 */
export const calculateYearsSince = (startDate: string): number => {
  const pastDate = new Date(startDate);
  const now = new Date();
  return now.getFullYear() - pastDate.getFullYear();
};

/**
 * React hook that recalculates on every component mount
 * @param startDate - Date string in YYYY-MM-DD format
 * @returns Current years of experience
 */
export const useYearsOfExperience = (startDate: string): number => {
  return calculateYearsSince(startDate);
};