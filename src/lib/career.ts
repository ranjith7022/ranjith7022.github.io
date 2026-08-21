const CAREER_START_DATE = new Date(2022, 1, 12);

export function getCompletedCareerYears(currentDate = new Date()) {
  const yearDifference = currentDate.getFullYear() - CAREER_START_DATE.getFullYear();
  const hasReachedAnniversary =
    currentDate.getMonth() > CAREER_START_DATE.getMonth() ||
    (currentDate.getMonth() === CAREER_START_DATE.getMonth() &&
      currentDate.getDate() >= CAREER_START_DATE.getDate());

  return hasReachedAnniversary ? yearDifference : yearDifference - 1;
}

export const careerYears = getCompletedCareerYears();
