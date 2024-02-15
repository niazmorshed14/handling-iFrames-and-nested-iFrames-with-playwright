/* 
    iframe or an inline frame is an element in which external pages are embeded. 
    To handle any elements inside a frame, we need to switch to the particular frame first.
    There will be either frame or iframe tag if there is any frame present on a webpage.  
*/


import {test, expect} from "@playwright/test";

test ("Handling iframes with Playwright", async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(3000);

    //getting total number of frames available in the page
    const totalFrames = await page.frames(); //this will return an array of frames
    console.log("The total number of frames are: ", totalFrames.length);

    //interacting with the elements inside the frames using Frame Objects

    //approach 1: using name or url of the frame
    
    const desiredFrame1 = await page.frame('name') //currently name is not available for that frame. so we will use url

    const frame1 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"}); //using complete url of the frame
    //there is an input box. so we can directly pass value there. we need to use the metohds based on the element types
    await frame1.fill("input[name='mytext1']", "Md. Niaz Morshed"); 
    await page.waitForTimeout(5000); 

    //approach 2: using frame locator
    const inputBox = await page.frameLocator("//frameset//frameset//frame[1]").locator("input[name='mytext2']");
    /* the first locator is the frame locator and the second one is the locator of the element (inputbox) */
    inputBox.fill("Md. Niaz Morshed");
    await page.waitForTimeout(3000);

});