import xpaths from "./xpaths";
const sprintf = require('sprintf-js').sprintf;


export async function Open(page) {
    await page.waitForSelector(xpaths.PDGSection, xpaths.VisibleState);

    let isVisible = await page.locator(xpaths.PDGContentFlow).isVisible();

    if (!isVisible) {
        await page.locator(xpaths.PDGSection).click();
        await page.locator(xpaths.PDGContentFlow).click();
    } else {
        await page.locator(xpaths.PDGContentFlow).click();
    }

    await page.waitForSelector(xpaths.PDGContentFlowText)
}

export async function OpenGroup(page) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGContentFlowDescriptionSamples, xpaths.VisibleState);

    let isVisible = await frame.locator(xpaths.PDGContentFlowDescriptionSamples).isVisible();

    if (isVisible) {
        await frame.locator(xpaths.PDGContentFlowDescriptionSamples).click();
    }else{
        throw new Error("groups section is not displayed")
    }

    await frameWait.waitForSelector(xpaths.PDGContentFlowDescriptionSamplesNew)
}

export async function CreateWorkbench(page, contentFlow) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbench, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbench).click()

    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbenchAdd, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbenchAdd).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbenchName, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbenchName).fill(contentFlow.Name)
    await frame.locator(xpaths.PDGContentFlowWorkbenchSourceUrl).fill(contentFlow.Url)
    await frame.locator(xpaths.PDGContentFlowWorkbenchSourceType).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchSourceTypeResult, contentFlow.SourceTypeCSV)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchSourceTypeDelimeter).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchSourceTypeFirstResult).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchSourceTypeCharacter).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchSourceTypeFirstResult).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchSourceTypeSkip).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchSourceTypeFirstResult).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchSourceTypeValidate).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbenchSourceTypeValidateText, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchUrlCheckbox).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchHeaderCheckbox).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchSchedulingOptions).click()

    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbenchLoadSavedConfiguration);
    await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateType).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchTemplateTypeParameter, contentFlow.Template)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeId).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchTemplateTypeParameter, contentFlow.ProductId)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchGenerativeModel).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchModelResult, contentFlow.GenerativeModel)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxTokens).fill(contentFlow.MaxTokens)
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbenchMaxTokensTip, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxLanguage).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchMaxLanguageResult, contentFlow.Language)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOff).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOnStyleValidation).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOnSamplesGroup).click() 
    await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOnSamplesGroupSection).click() 
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowWorkbenchHitlOnSamplesGroupResult, contentFlow.GroupName));
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchHitlOnSamplesGroupResult, contentFlow.GroupName)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchBannedKeywords).fill(contentFlow.BannedKeyword)
    await frame.locator(xpaths.PDGContentFlowWorkbenchBannedLanguage).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchMandatoryLanguageResult, contentFlow.Language)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMandatoryLanguageApply).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchConfirmBannedKeywords).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMandatoryKeywords).fill(contentFlow.MandatoryKeyword)
    await frame.locator(xpaths.PDGContentFlowWorkbenchMandatoryLanguage).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchMandatoryLanguageResult, contentFlow.Language)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMandatoryLanguageApply).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchConfirmMandatoryKeywords).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxExtraPrompt).fill(contentFlow.ExtraPrompt)
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxExtraPromptAdd).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxSavePipeline).click()

    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbench, xpaths.VisibleState);
}

export async function ValidateWorkbench(page, contentFlow) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbench, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbench).click()
    
    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowStatus, contentFlow.StatusNA));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowAvailability, contentFlow.Availability));

    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenu).click()
    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuEdit).click()

    let Text = await frame.locator(xpaths.PDGContentFlowWorkbenchName).inputValue()
    if (Text != contentFlow.Name) {
        throw new Error("Text is not expected")
    }
    Text = await frame.locator(xpaths.PDGContentFlowWorkbenchSourceUrl).inputValue()
    if (Text != contentFlow.Url) {
        throw new Error("Text is not expected")
    }
    Text = await frame.locator(xpaths.PDGContentFlowWorkbenchSourceType).textContent()
    if (Text != contentFlow.SourceTypeCSV) {
        throw new Error("Text is not expected")
    }
    
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    let True = await frame.locator(xpaths.PDGContentFlowWorkbenchUrlCheckbox).isChecked()
    if (!True) {
        throw new Error("element is not checked")
    }
    
    True = await frame.locator(xpaths.PDGContentFlowWorkbenchHeaderCheckbox).isChecked()
    if (!True) {
        let True = await frame.locator(xpaths.PDGContentFlowWorkbenchHeaderTrustCheckbox).isChecked()
        if (!True) {
            throw new Error("Text is not expected")
        }
    }

    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    let className = await frame.locator(xpaths.PDGContentFlowWorkbenchSchedulingOptions).getAttribute(xpaths.Class);

    if (!className.includes(contentFlow.Manual)) {
        throw new Error("element is expected")
    }

    className = await frame.locator(xpaths.PDGContentFlowWorkbenchSchedulingOptionsWeek).getAttribute(xpaths.Class);

    if (!className.includes(contentFlow.Week)) {
        throw new Error("element is expected")
    }

    className = await frame.locator(xpaths.PDGContentFlowWorkbenchSchedulingOptionsDaily).getAttribute(xpaths.Class);

    if (!className.includes(contentFlow.Month)) {
        throw new Error("element is expected")
    }

    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbenchLoadSavedConfiguration);
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowWorkbenchTemplateTypeResult, contentFlow.Template));
    Text = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateType).textContent()
    if (Text != contentFlow.Template) {
        throw new Error("Text is not expected")
    }

    Text = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeId).textContent()
    if (Text != contentFlow.ProductId) {
        throw new Error("Text is not expected")
    }

    True = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeColor).isVisible()
    if (True) {
        let Text = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeColor).textContent()
        if (Text != contentFlow.ProductColor) {
            throw new Error("Text is not expected")
        }
    }

    True = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeBrand).isVisible()
    if (True) {
        let Text = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeBrand).textContent()
        if (Text != contentFlow.ProductBrand) {
            throw new Error("Text is not expected")
        }
    }

    True = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeType).isVisible()
    if (True) {
        let Text = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeType).textContent()
        if (Text != contentFlow.ProductType) {
            throw new Error("Text is not expected")
        }
    }

    True = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeTitle).isVisible()
    if (True) {
        let Text = await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeTitle).textContent()
        if (Text != contentFlow.ProductTittle) {
            throw new Error("Text is not expected")
        }
    }

    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    Text = await frame.locator(xpaths.PDGContentFlowWorkbenchGenerativeModel).textContent()
    if (Text != contentFlow.GenerativeModelBase) {
        throw new Error("Text is not expected")
    }

    Text = await frame.locator(xpaths.PDGContentFlowWorkbenchMaxTokens).inputValue()
    if (Text != contentFlow.MaxTokens) {
        throw new Error("Text is not expected")
    }

    Text = await frame.locator(xpaths.PDGContentFlowWorkbenchMaxLanguage).textContent()
    if (Text != contentFlow.Language) {
        throw new Error("Text is not expected")
    }

    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    True = await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOn).isChecked()
    if (!True) {
        let True = await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOff).isChecked()
        if (!True) {
            throw new Error("element is not checked")
        } 
    }

    True = await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOnStyleValidation).isChecked()
    if (!True) {
        throw new Error("element is not checked")
    }

    True = await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOnSamplesGroup).isChecked()
    if (!True) {
        throw new Error("element is not checked")
    }

    Text = await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOnSamplesGroupSection).textContent()
    if (!Text.includes(contentFlow.GroupName)) {
        throw new Error("Text is not expected")
    }

    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowWorkbenchBannedKeywordsLanguage, contentFlow.MandatoryKeywordEN));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowWorkbenchMandatoryKeywordsLanguage, contentFlow.BannedKeywordEN));

    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowWorkbenchMaxExtraPromptCheck, contentFlow.ExtraPrompt));
}

export async function UpdateWorkbench(page, updatecontentFlow) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbench, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbench).click()
    
    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, updatecontentFlow.OldName));

    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenu).click()
    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuEdit).click()

    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbenchName, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbenchName).fill(updatecontentFlow.Name)
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchHeaderTrustCheckbox).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchSchedulingOptionsWeek).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchSchedulingOptionsWeekInputTime).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchSchedulingOptionsWeekInputTimeValue, updatecontentFlow.Time)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchSchedulingOptionsWeekInputTimezone).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchSchedulingOptionsWeekInputTimezoneValue, updatecontentFlow.TimeZone)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateType).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchTemplateTypeParameter, updatecontentFlow.Template)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeId).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchTemplateTypeParameter, updatecontentFlow.ProductId)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeColor).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchTemplateTypeParameter, updatecontentFlow.ProductColor)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeBrand).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchTemplateTypeParameter, updatecontentFlow.ProductBrand)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeType).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchTemplateTypeParameter, updatecontentFlow.ProductType)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchTemplateTypeTitle).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchTemplateTypeParameter, updatecontentFlow.ProductTittle)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchGenerativeModel).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchModelResult, updatecontentFlow.GenerativeModel)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxTokens).fill(updatecontentFlow.MaxTokens)
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbenchMaxTokensTip, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxLanguage).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchMaxLanguageResult, updatecontentFlow.Language)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchHitlOn).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchEditBannedKeywords).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditBannedKeywordsEdit).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditBannedKeywordsEditInput).fill(updatecontentFlow.BannedKeyword)
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditBannedKeywordsEditInputApply).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditBannedKeywordsEditLanguage).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchEditBannedKeywordsEditLanguageResult, updatecontentFlow.Language)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMandatoryLanguageApply).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditBannedKeywordsSaveChanges).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditMandatoryKeywords).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditMandatoryKeywordsEdit).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditMandatoryKeywordsEditInput).fill(updatecontentFlow.MandatoryKeyword)
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditMandatoryKeywordsEditInputApply).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditMandatoryKeywordsEditLanguage).click()
    await frame.locator(sprintf(xpaths.PDGContentFlowWorkbenchEditMandatoryKeywordsEditLanguageResult, updatecontentFlow.Language)).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMandatoryLanguageApply).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchEditMandatoryKeywordsSaveChanges).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchNext).click()

    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxExtraPromptDelete).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxExtraPrompt).fill(updatecontentFlow.ExtraPrompt)
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxExtraPromptAdd).click()
    await frame.locator(xpaths.PDGContentFlowWorkbenchMaxSavePipeline).click()

    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbenchMaxSuccesfullyMsg, xpaths.VisibleState);
}

export async function Active(page, contentFlow) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbench, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbench).click()
    
    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name));

    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenu).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowSubMenuLaunch)

    let True = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuLaunch).isEnabled()
    if (True) {
        throw new Error("element is enabled")
    }
    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuActive).click()

    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowStatus, contentFlow.StatusNA));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowAvailability, contentFlow.AvailabilityActive));

    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenu).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowSubMenuDeactive);
}

export async function Deactive(page, contentFlow) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbench, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbench).click()
    
    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name));
    
    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenu).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowSubMenuDeactive)
    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuDeactive).click()
    await frame.locator(xpaths.PDGContentFlowFirstRowRefresh).click()

    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowStatus, contentFlow.StatusRunning));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowAvailability, contentFlow.Availability));

    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenu).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowSubMenuActive);
}

export async function Launch(page, contentFlow) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbench, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbench).click()
    
    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name));
    let Text = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuLastExecuted).textContent()
    if (Text != contentFlow.EmptyValue) {
        throw new Error("Text is not expected")
    }
    Text = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuOptimized).textContent()
    if (Text != contentFlow.Empty) {
        throw new Error("Text is not expected")
    }

    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenu).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowSubMenuLaunch)
    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuLaunch).click()

    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowStatus, contentFlow.StatusRunning));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowAvailability, contentFlow.AvailabilityActive));
    Text = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuLastExecuted).textContent()
    if (Text == contentFlow.Empty) {
        throw new Error("Text is not expected")
    }
    Text = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuOptimized).textContent()
    if (Text != contentFlow.Empty) {
        throw new Error("Text is not expected")
    }

    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenu).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowSubMenuDeactive);
    let True = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuEdit).isVisible()
    if (True) {
        throw new Error("element is not expected")
    }
    True = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuEdit).isVisible()
    if (True) {
        throw new Error("element is not expected")
    }
    True = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuDublicate).isVisible()
    if (True) {
        throw new Error("element is not expected")
    }
    True = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuDownload).isVisible()
    if (True) {
        throw new Error("element is not expected")
    }
    True = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuCopyURLLink).isVisible()
    if (True) {
        throw new Error("element is not expected")
    }
    True = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuLaunch).isVisible()
    if (True) {
        throw new Error("element is not expected")
    }
    True = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuActive).isVisible()
    if (True) {
        throw new Error("element is not expected")
    }
}

export async function LaunchValidation(page, contentFlow, config) {
    let frame = await page.frameLocator(xpaths.iFrame)
    let frameHandle = await page.waitForSelector(xpaths.iFrame)
    let frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGContentFlowExecutionHistory, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowExecutionHistory).click()
    
    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowStatus, contentFlow.StatusRunning));

    let Text = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuLaunched).textContent()
    if (Text == contentFlow.EmptyValue) {
        throw new Error("Text is not expected")
    }

    await frame.locator(xpaths.PDGContentFlowDashboards).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowDashBoardSubActivePipelineText, xpaths.VisibleState);
    await frameWait.waitForSelector(xpaths.PDGContentFlowDashBoardSubActiveFirstItemFrame);

    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashBoardSubPipelineName, contentFlow.Name));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashBoardSubCreatedBy, config.testUserRole));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashBoardStatusRunning, contentFlow.StatusRunning));

    let Visible = await frame.locator(sprintf(xpaths.PDGContentFlowDashBoardPendingName, contentFlow.Name)).isVisible()
    if (!Visible) {
        await OpenGroup(page)
        await frame.locator(xpaths.PDGContentFlowDashboards).click()
    }

    Visible = await frame.locator(sprintf(xpaths.PDGContentFlowDashBoardPendingName, contentFlow.Name)).isVisible()
    if (!Visible) {
        await page.waitForTimeout(5000)
        await OpenGroup(page)
        await frame.locator(xpaths.PDGContentFlowDashboards).click()
        await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashBoardPendingName, contentFlow.Name));
    }
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashboardFirstValue, contentFlow.Language));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashboardFirstValue, contentFlow.HITLOn));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashBoardSubPipelineNameHITL, contentFlow.Name));

    await frame.locator(xpaths.PDGContentFlowDashboardFirstValueGo).click()

    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashboardFirstValueGoValue, contentFlow.Template));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashboardFirstValueGoValue, contentFlow.GenerativeModel));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashboardFirstValueGoValue, contentFlow.MaxTokens));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowDashboardFirstValueGoValue, contentFlow.Language));
}

export async function Delete(page, contentFlow) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGContentFlowWorkbench, xpaths.VisibleState);
    await frame.locator(xpaths.PDGContentFlowWorkbench).click()
    await frame.locator(xpaths.PDGContentFlowFirstRowRefresh).click()
    await frame.locator(xpaths.PDGContentFlowFirstRowRefresh).click()

    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name));
    await frameWait.waitForSelector(sprintf(xpaths.PDGContentFlowFirstRowStatus, contentFlow.StatusSucceeded));
    let Text = await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuOptimized).textContent()
    if (Text != contentFlow.Metrics) {
        throw new Error("Text is not expected")
    }

    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenu).click()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowSubMenuDelete)
    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuDelete).click()
    await frame.locator(xpaths.PDGContentFlowFirstRowSubMenuConfirmDelete).click()

    await frame.locator(xpaths.PDGContentFlowFirstHeaderName).hover()
    await frameWait.waitForSelector(xpaths.PDGContentFlowFirstRowNameSort)
    await frame.locator(xpaths.PDGContentFlowFirstRowNameSort).click()
    let True = await frame.locator(sprintf(xpaths.PDGContentFlowFirstRowName, contentFlow.Name)).isVisible()
    if (True) {
        throw new Error("element is visible")
    }
}