import { Homepage } from "../../pageObjectModel/homePage";
const homepagePom = new Homepage()

import homePageSecond from "../../pageObjectModel/homePageSecond";

describe('Page Object Model 1. Kullanimi', () => {
    it('Page Object Kullanim Ornekleri', () => {
        homepagePom.navigate()
        homepagePom.pricinBtn()
        homepagePom.verifyPricingTitle()
    });
});

describe('Page Object Model 2. Kullanimi', () => {
    it('Page Object Kullanim Ornekleri', () => {
        homePageSecond.navigate()
        homePageSecond.pricinBtn.should("be.visible").and("contain","Pricing").click()
        homePageSecond.verifyPricingTitle
    });
});

