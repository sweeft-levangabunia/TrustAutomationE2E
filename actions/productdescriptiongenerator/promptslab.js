import xpaths from "./xpaths";
const sprintf = require('sprintf-js').sprintf;


export async function Open(page) {
    await page.waitForSelector(xpaths.PDGSection, xpaths.VisibleState);

    let isVisible = await page.locator(xpaths.PDGPromptLab).isVisible();

    if (!isVisible) {
        await page.locator(xpaths.PDGSection).click();
        await page.locator(xpaths.PDGPromptLab).click();
    } else {
        await page.locator(xpaths.PDGPromptLab).click();
    }

    await page.waitForSelector(xpaths.PDGPromptLabText)
}

export async function OpenGroups(page) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsSection, xpaths.VisibleState);

    let isVisible = await frame.locator(xpaths.PDGPromptLabGroupsSection).isVisible();

    if (isVisible) {
        await frame.locator(xpaths.PDGPromptLabGroupsSection).click();
    }else{
        throw new Error("groups section is not displayed")
    }

    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsSectionText)
}

export async function OpenManagerConfig(page) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGPromptLabManagerConfigSection, xpaths.VisibleState);

    let isVisible = await frame.locator(xpaths.PDGPromptLabManagerConfigSection).isVisible();
    if (isVisible) {
        await frame.locator(xpaths.PDGPromptLabManagerConfigSection).click();
    }else{
        throw new Error("groups section is not displayed")
    }

    await frameWait.waitForSelector(xpaths.PDGPromptLabManagerConfigSectionText)
}

export async function CreateGroup(page, promptsLab) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    let True= await frame.locator(xpaths.PDGPromptLabGroupsCreateNew).isVisible()
    if (True) {
        await frame.locator(xpaths.PDGPromptLabGroupsCreateNew).click()
    }else{
        await frame.locator(xpaths.PDGContentFlowDescriptionSamplesNew).click()
    }
    await frame.locator(xpaths.PDGPromptLabGroupsCreateName).fill(promptsLab.GroupName)
    await frame.locator(xpaths.PDGPromptLabGroupsCreateDescription).fill(promptsLab.GroupName)
    await frame.locator(xpaths.PDGPromptLabGroupsCreateAddDescription).click()

    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsCreateMailBox, xpaths.VisibleState)

    let Text = await frame.locator(xpaths.PDGPromptLabGroupsCreateMailBoxText).textContent()
    if (Text != promptsLab.GroupName) {
        throw new Error("Text is not expected")
    }

    await frame.locator(xpaths.PDGPromptLabGroupsCreateSaveSamplesGroup).click()
}

export async function GroupValidate(page, promptsLab, config) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()
    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsCreateNew, xpaths.VisibleState)

    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowGroupName).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabGroupsFirstRowName, promptsLab.GroupName))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabGroupsFirstRowDescription, promptsLab.Description))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabGroupsFirstRowCreatedBy, config.testUserRole))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabGroupsFirstRowUpdatedBy, config.testUserRole))

    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowEditSubmenu).click()
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowEdit).click()

    let Text = await frame.locator(xpaths.PDGPromptLabGroupsCreateName).inputValue()
    if (Text != promptsLab.GroupName) {
        throw new Error("Text is not expected")
    }

    Text = await frame.locator(xpaths.PDGPromptLabGroupsCreateMailBoxText).textContent()
    if (Text != promptsLab.GroupName) {
        await frame.locator(xpaths.PDGPromptLabGroupsCreateBack).click()
        await frame.locator(xpaths.PDGPromptLabGroupsFirstRowGroupName).hover()
        await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsFirstRowNameSort)
        await frame.locator(xpaths.PDGPromptLabGroupsFirstRowNameSort).click()
        await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabGroupsFirstRowName, promptsLab.GroupName))
        await frame.locator(xpaths.PDGPromptLabGroupsFirstRowEditSubmenu).click()
        await frame.locator(xpaths.PDGPromptLabGroupsFirstRowEdit).click()
    }

    Text = await frame.locator(xpaths.PDGPromptLabGroupsCreateMailBoxText).textContent()
    if (Text != promptsLab.GroupName) {
        throw new Error("Text is not expected")
    }
}

export async function CreateExperiment(page, promptsLab) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.PDGPromptLabCreateNewExperiment).click()
    await frame.locator(xpaths.PDGPromptLabCreateTemplate).click()
    await frame.locator(sprintf(xpaths.PDGPromptLabCreateTemplateResult, promptsLab.Template)).click()
    await frame.locator(xpaths.PDGPromptLabCreateGenerativeModel).click()
    await frame.locator(sprintf(xpaths.PDGPromptLabCreateGenerativeModelGPT, promptsLab.GenerativeModel)).click()
    await frame.locator(xpaths.PDGPromptLabCreateLanguage).click()
    await frame.locator(sprintf(xpaths.PDGPromptLabCreateLanguageEnglish, promptsLab.Language)).click()
    await frame.locator(xpaths.PDGPromptLabCreateGroup).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabCreateGroupItem, promptsLab.GroupName))
    await frame.locator(sprintf(xpaths.PDGPromptLabCreateGroupItem, promptsLab.GroupName)).click()
    await frame.locator(xpaths.PDGPromptLabCreateGroup).click({force: true})
    let Text = await frame.locator(xpaths.PDGPromptLabCreateGroup).textContent()
    if (Text != promptsLab.GroupName) {
        throw new Error("Text is not expected")
    }
    await frame.locator(xpaths.PDGPromptLabCreateGenerateDescription).click()

    await frameWait.waitForSelector(xpaths.PDGPromptLabCreateDescriptionParametersApplied, xpaths.VisibleState)
    await frameWait.waitForSelector(xpaths.PDGPromptLabCreateBannedKeywordsExcluded, xpaths.VisibleState)
    await frameWait.waitForSelector(xpaths.PDGPromptLabCreateBannedMandatoryKeywordsApplied, xpaths.VisibleState)
    await frameWait.waitForSelector(xpaths.PDGPromptLabCreateValidationResults, xpaths.VisibleState)
    await frameWait.waitForSelector(xpaths.PDGPromptLabCreateImproveTips, xpaths.VisibleState)

    Text = await frame.locator(xpaths.PDGPromptLabCreateGeneratedDescription).textContent()
    if (Text == ``) {
        throw new Error("Generated Description is empty")
    }

    await frame.locator(xpaths.PDGPromptLabCreateSaveConfiguration).click()
    await frame.locator(xpaths.PDGPromptLabCreateSaveConfigurationName).fill(promptsLab.Name)
    await frame.locator(xpaths.PDGPromptLabCreateSaveConfigurationApply).click()
    await page.waitForTimeout(500)
}

export async function ExperimentValidate(page, promptsLab, config) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowConfigName).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabManagerConfigFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowName, promptsLab.Name))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowCreatedBy, config.testUserRole))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowgenerativeMdel, promptsLab.GenerativeModel))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowPrompt, promptsLab.Name))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowKeywords, promptsLab.Keywords))

    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowEditSubmenu).click()
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowEdit).click()
    await page.waitForTimeout(1000)

    let Text = await frame.locator(xpaths.PDGPromptLabCreatePreviousConfiguration).textContent()
    if (Text != promptsLab.Name) {
        throw new Error("Text is not expected")
    }
    Text = await frame.locator(xpaths.PDGPromptLabCreateTemplate).textContent()
    if (Text != promptsLab.Template) {
        throw new Error("Text is not expected")
    }
    Text = await frame.locator(xpaths.PDGPromptLabCreateLanguage).textContent()
    if (Text != promptsLab.Language) {
        throw new Error("Text is not expected")
    }
    Text = await frame.locator(xpaths.PDGPromptLabCreateGenerativeModel).textContent()
    if (Text != promptsLab.GenerativeModelValidate) {
        throw new Error("Text is not expected")
    }
}

export async function Validate(page, promptsLab, config) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.PDGPromptLabFirstRowLastExecution).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabFirstRowNameSort).click()
    await frame.locator(xpaths.PDGPromptLabFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabFirstRowModel, promptsLab.GenerativeModel))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLaFirstRowTemplate, promptsLab.Template))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabFirstRowUpdatedBy, config.testUserRole))
    await frameWait.waitForSelector(xpaths.PDGPromptLaFirstRowName)
}

export async function UpdateGroup(page, updatePromptsLab) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowGroupName).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowNameSort).click()

    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowEditSubmenu).click()
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowEdit).click()

    await frame.locator(xpaths.PDGPromptLabGroupsCreateName).fill(updatePromptsLab.GroupName)
    await frame.locator(xpaths.PDGPromptLabGroupsCreateMailBoxEdit).click()
    await frame.locator(xpaths.PDGPromptLabGroupsCreateMailBoxEditText).fill(updatePromptsLab.GroupName)
    await frame.locator(xpaths.PDGPromptLabGroupsCreateMailBoxSave).click()

    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsCreateMailBox, xpaths.VisibleState)

    let Text = await frame.locator(xpaths.PDGPromptLabGroupsCreateMailBoxText).textContent()
    if (Text != updatePromptsLab.GroupName) {
        throw new Error("Text is not expected")
    }

    await frame.locator(xpaths.PDGPromptLabGroupsCreateSaveSamplesGroup).click()
    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsCreateNew, xpaths.VisibleState)
}

export async function UpdateExperiment(page, updatePromptsLab) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowConfigName).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabManagerConfigFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowNameSort).click()

    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowEditSubmenu).click()
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowEdit).click()
    await page.waitForTimeout(1000)

    await frame.locator(xpaths.PDGPromptLabCreateTemplate).click()
    await frame.locator(sprintf(xpaths.PDGPromptLabCreateTemplateResult, updatePromptsLab.Template)).click()
    await frame.locator(xpaths.PDGPromptLabCreateTemplateTitle).fill(updatePromptsLab.TemplateTitle)
    await frame.locator(xpaths.PDGPromptLabCreateTemplateBrand).fill(updatePromptsLab.TemplateBrand)
    await frame.locator(xpaths.PDGPromptLabCreateTemplateType).fill(updatePromptsLab.TemplateType)
    await frame.locator(xpaths.PDGPromptLabCreateTemplateColor).fill(updatePromptsLab.TemplateColor)
    await frame.locator(xpaths.PDGPromptLabCreateGenerativeModel).click()
    await frame.locator(sprintf(xpaths.PDGPromptLabCreateGenerativeModelGPT, updatePromptsLab.GenerativeModel)).click()
    await frame.locator(xpaths.PDGPromptLabCreateLanguage).click()
    await frame.locator(sprintf(xpaths.PDGPromptLabCreateLanguageEnglish, updatePromptsLab.Language)).click()
    let Text = await frame.locator(xpaths.PDGPromptLabCreateGroup).textContent()
    if (Text != updatePromptsLab.GroupName) {
        await frame.locator(xpaths.PDGPromptLabCreateGroup).click()
        await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabCreateGroupItem, updatePromptsLab.GroupName))
        await frame.locator(sprintf(xpaths.PDGPromptLabCreateGroupItem, updatePromptsLab.GroupName)).click()
        await frame.locator(xpaths.PDGPromptLabCreateGroup).click({force: true})
    }
    Text = await frame.locator(xpaths.PDGPromptLabCreateGroup).textContent()
    if (Text != updatePromptsLab.GroupName) {
        throw new Error("Text is not expected")
    }
    await frame.locator(xpaths.PDGPromptLabCreateGroup).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabCreateGroupItem, updatePromptsLab.GroupName))
    await frame.locator(xpaths.PDGPromptLabCreateGroup).click({force: true})

    await frame.locator(xpaths.PDGPromptLabCreateGenerateDescription).click()

    await frameWait.waitForSelector(xpaths.PDGPromptLabCreateBannedKeywordsExcluded, xpaths.VisibleState)
    await frameWait.waitForSelector(xpaths.PDGPromptLabCreateBannedMandatoryKeywordsApplied, xpaths.VisibleState)
    await frameWait.waitForSelector(xpaths.PDGPromptLabCreateValidationResults, xpaths.VisibleState)
    await frameWait.waitForSelector(xpaths.PDGPromptLabCreateImproveTips, xpaths.VisibleState)

    Text = await frame.locator(xpaths.PDGPromptLabCreateGeneratedDescription).textContent()
    if (Text == ``) {
        throw new Error("Generated Description is empty")
    }

    await frame.locator(xpaths.PDGPromptLabCreateSaveConfiguration).click()
    await frame.locator(xpaths.PDGPromptLabCreateSaveConfigurationName).fill(updatePromptsLab.Name)
    await frame.locator(xpaths.PDGPromptLabCreateSaveNewConfigurationApply).click()
    await page.waitForTimeout(500)
}

export async function UpdateExperimentValidate(page, updatePromptsLab, config) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowConfigName).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabManagerConfigFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowName, updatePromptsLab.Name))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowCreatedBy, config.testUserRole))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowgenerativeMdel, updatePromptsLab.GenerativeModel))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowPrompt, updatePromptsLab.Name))
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowKeywords, updatePromptsLab.Keywords))

    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowEditSubmenu).click()
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowEdit).click()
    await page.waitForTimeout(1000)

    let Text = await frame.locator(xpaths.PDGPromptLabCreatePreviousConfiguration).textContent()
    if (Text != updatePromptsLab.Name) {
        throw new Error("Text is not expected")
    }
    Text = await frame.locator(xpaths.PDGPromptLabCreateTemplate).textContent()
    if (Text != updatePromptsLab.Template) {
        throw new Error("Text is not expected")
    }
    // Text = await frame.locator(xpaths.PDGPromptLabCreateTemplateTitle).textContent()
    // if (Text != updatePromptsLab.TemplateTitle) {
    //     throw new Error("Text is not expected")
    // }
    // Text = await frame.locator(xpaths.PDGPromptLabCreateTemplateType).textContent()
    // if (Text != updatePromptsLab.TemplateBrand) {
    //     throw new Error("Text is not expected")
    // }
    // Text = await frame.locator(xpaths.PDGPromptLabCreateTemplateBrand).textContent()
    // if (Text != updatePromptsLab.TemplateType) {
    //     throw new Error("Text is not expected")
    // }
    // Text = await frame.locator(xpaths.PDGPromptLabCreateTemplateColor).textContent()
    // if (Text != updatePromptsLab.TemplateColor) {
    //     throw new Error("Text is not expected")
    // }
    Text = await frame.locator(xpaths.PDGPromptLabCreateLanguage).textContent()
    if (Text != updatePromptsLab.Language) {
        throw new Error("Text is not expected")
    }
    Text = await frame.locator(xpaths.PDGPromptLabCreateGenerativeModel).textContent()
    if (Text != updatePromptsLab.GenerativeModelValidate) {
        throw new Error("Text is not expected")
    }
}

export async function GroupDelete(page, promptsLab) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowGroupName).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowNameSort).click()
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowNameSort).click()
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabGroupsFirstRowName, promptsLab.GroupName))

    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowEditSubmenu).click()
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowDelete).click()
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowDeleteYes).click()
    
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowGroupName).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabGroupsFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowNameSort).click()
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowNameSort).click()

    let Visible = await frame.locator(sprintf(xpaths.PDGPromptLabGroupsFirstRowName, promptsLab.GroupName)).isVisible()
    if (Visible) {
        throw new Error("Element is Visible")
    }
    await frame.locator(xpaths.PDGPromptLabGroupsFirstRowNameSort).click()
    
    Visible = await frame.locator(sprintf(xpaths.PDGPromptLabGroupsFirstRowName, promptsLab.GroupName)).isVisible()
    if (Visible) {
        throw new Error("Element is Visible")
    }
}

export async function ExperimentDelete(page, promptsLab) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowConfigName).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabManagerConfigFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowNameSort).click()
    await frameWait.waitForSelector(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowName, promptsLab.Name))

    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowEditSubmenu).click()
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowDelete).click()
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowDeleteYes).click()
    await page.waitForTimeout(1000)

    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowConfigName).hover()
    await frameWait.waitForSelector(xpaths.PDGPromptLabManagerConfigFirstRowNameSort)
    await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowNameSort).click()
    await frameWait.waitForSelector(xpaths.PDGPromptLabManagerConfigFirstRow)

    let Visible = await frame.locator(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowName, promptsLab.Name)).isVisible()
    if (Visible) {
        await frame.locator(xpaths.PDGPromptLabGroupsCreateBack).click()
        await frame.locator(xpaths.PDGPromptLabManagerConfigSection).click()
        await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowConfigName).hover()
        await frameWait.waitForSelector(xpaths.PDGPromptLabManagerConfigFirstRowNameSort)
        await frame.locator(xpaths.PDGPromptLabManagerConfigFirstRowNameSort).click()
    }

    Visible = await frame.locator(sprintf(xpaths.PDGPromptLabManagerConfigFirstRowName, promptsLab.Name)).isVisible()
    if (Visible) {
        throw new Error("Element is visible")
    }
}
