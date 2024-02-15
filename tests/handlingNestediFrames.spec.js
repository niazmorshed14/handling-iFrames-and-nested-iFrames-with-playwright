import {test, expect} from "@playwright/test";

test ("Handling iframes with Playwright", async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(3000);

    //interacting with main iframe element
    const iframe3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});
    await iframe3.locator("input[name='mytext3']").fill("Md. Niaz Morshed");
    await page.waitForTimeout(3000);

    //interacting with elements of nested iframe
    const allNestedFrames = await iframe3.childFrames(); //will return an array
    console.log("Total number of nested frames are: ", allNestedFrames.length); //checking total number of nested iframes

    await allNestedFrames[0].locator('//*[@id="i8"]/div[3]/div').check(); 
    /* we have declared the index of the element inside the nested iframe where we performed check operation */
    await page.waitForTimeout(3000);

});