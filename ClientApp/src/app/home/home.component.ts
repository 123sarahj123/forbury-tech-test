import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  title = "Forbury Commercial Rent Calculator";

  public yearProfiles: YearProfile[] = [];

  public yearOneSales: number = 0;
  public baseRentYearOneToFive: number = 0;
  public baseRentYearSixToTen: number = 0;
  public percentageRentTierOne: number = 0;
  public percentageRentTierTwo: number = 0;
  public percentageRentTierThree: number = 0;
  public compoundingAnnualSalesGrowth: number = 0;


  
  calculateRentProfile() {

    // Range of 10, as we only care about the next 10 years
    for (let i = 1; i <= 10; i++) {

      let yearProfile = new YearProfile(i) // create year profile for current year

      yearProfile.yearSales = this.calculateYearSales(yearProfile.year);
      yearProfile.baseRent = this.calculateBaseRent(yearProfile.year);

      //calculate the low-end brackets for each tier of a given yearProfile
      yearProfile.tierOneLowerBracket = this.calculateTierLowEndBracket(yearProfile, Tier.TierOne);
      yearProfile.tierTwoLowerBracket = this.calculateTierLowEndBracket(yearProfile, Tier.TierTwo);
      yearProfile.tierThreeLowerBracket = this.calculateTierLowEndBracket(yearProfile, Tier.TierThree);

      //calculate the rent for each tier of a given yearProfile
      yearProfile.tierOneRent = this.calculateTierRent(yearProfile, Tier.TierOne);
      yearProfile.tierTwoRent = this.calculateTierRent(yearProfile, Tier.TierTwo);
      yearProfile.tierThreeRent = this.calculateTierRent(yearProfile, Tier.TierThree);

      yearProfile.totalPercentageRent = this.calculateTotalPercentageRent(yearProfile);


      this.yearProfiles.push(yearProfile)
    }

  }

  // Takes a Tier enumerator and will return the low end bracket for that tier
  // Tier one low end bracket: base rent/8%
  // Tier two low end bracket: base rent/4%
  // Tier three low end bracket: base rent/2%
  calculateTierLowEndBracket(yearProfile: YearProfile, tier: Tier) {
    let tierAmount = 0;

    switch (tier) {
      case Tier.TierOne:
        tierAmount = yearProfile.baseRent / 0.08
        return tierAmount;

      case Tier.TierTwo:
        tierAmount = yearProfile.baseRent / 0.04
        return tierAmount;

      case Tier.TierThree:
        tierAmount = yearProfile.baseRent / 0.02
        return tierAmount;
    }
  }

  // Takes a Tier enumerator and will return the rent for that tier
  calculateTierRent(yearProfile: YearProfile, tier: Tier) {
    let tierRent = 0;

    switch (tier) {
      case Tier.TierOne:
        tierRent = (yearProfile.tierTwoLowerBracket - yearProfile.tierOneLowerBracket) * (this.percentageRentTierOne * 0.01)
        return tierRent;

      case Tier.TierTwo:
        tierRent = (yearProfile.tierThreeLowerBracket - yearProfile.tierTwoLowerBracket) * (this.percentageRentTierTwo * 0.01)
        return tierRent;

      case Tier.TierThree:
        tierRent = (yearProfile.yearSales - yearProfile.tierThreeLowerBracket) * (this.percentageRentTierThree * 0.01)
        return tierRent;
    }
  }

  // Takes a year profile and sums the percentage rents of tier 1, 2 and 3
  calculateTotalPercentageRent(yearProfile: YearProfile) {
    return yearProfile.tierOneRent + yearProfile.tierTwoRent + yearProfile.tierThreeRent;

  }

  // Takes a year as an input, and calculates the sales based on the given year (as there is
  // compounding annual sales growth from year 2)
  calculateYearSales(year: number) {
    let sales = 0;
    if (year === 1) {
      sales = this.yearOneSales;
    } else {
      sales = this.yearOneSales * (1 + (this.compoundingAnnualSalesGrowth * 0.01)) ** (year-1)
    }
    return sales;
  }


  // Takes a year and returns the base rent for the given year
  calculateBaseRent(year: number) {
    let baseRent = 0;
    if (year <= 5) {
      baseRent = this.baseRentYearOneToFive;
    } else {
      baseRent = this.baseRentYearSixToTen;
    }
    return baseRent;
  }

}

export class YearProfile {
  year: number;

  constructor(year: number) {
    this.year = year;

  }

  yearSales: number = 0;
  baseRent: number = 0;
  tierOneLowerBracket: number = 0;
  tierTwoLowerBracket: number = 0;
  tierThreeLowerBracket: number = 0;

  tierOneRent: number = 0;
  tierTwoRent: number = 0;
  tierThreeRent: number = 0;

  totalPercentageRent: number = 0;
}

enum Tier {
  TierOne,
  TierTwo,
  TierThree
}

