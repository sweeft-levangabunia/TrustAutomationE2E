const xpaths = {
    PDGSection: `//span[normalize-space()='Product Description Generator']`,
    PDGPromptLab: `//li[normalize-space()='Prompts Lab']`,
    PDGPromptLabText: `//p[normalize-space()='Product Description Generator - Prompts Lab']`,
    PDGContentFlow: `//li[normalize-space()='Content Flow']`,
    PDGContentFlowText: `//p[normalize-space()='Product Description Generator - Content Flow']`,
    
    PDGPromptLabGroupsSection: `//button[normalize-space()='Go To Description Samples']`,
    PDGPromptLabGroupsSectionText: `//p[normalize-space()='Description Samples Groups']`,
    PDGPromptLabGroupsCreateNew: `//button[normalize-space()='New Group']`,
    PDGPromptLabGroupsCreateName: `//input[@type='text']`,
    PDGPromptLabGroupsCreateDescription: `//textarea[@aria-invalid='false']`,
    PDGPromptLabGroupsCreateAddDescription: `//button[normalize-space()='Add Description']`,
    PDGPromptLabGroupsCreateMailBox: `//div[@class='MuiBox-root css-17ms9yv']`,
    PDGPromptLabGroupsCreateMailBoxText: `//p[@class='MuiTypography-root MuiTypography-body1 css-9l3uo3']`,
    PDGPromptLabGroupsCreateSaveSamplesGroup: `//button[normalize-space()='Save Descriptions Samples Group']`,
    PDGPromptLabGroupsCreateMailBoxEdit: `//p[normalize-space()='Edit']`,
    PDGPromptLabGroupsCreateMailBoxEditText: `//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s2vm78']//textarea[1]`,
    PDGPromptLabGroupsCreateMailBoxSave: `//p[normalize-space()="Save"]`,
    PDGPromptLabGroupsCreateBack: `//button[normalize-space()='Back']`,

    PDGPromptLabGroupsFirstRowName: `//div[@data-rowindex='0']//p[contains(text(), "%s")]`,
    PDGPromptLabGroupsFirstRowGroupName: `//div[contains(text(), "Group Name")]`,
    PDGPromptLabGroupsFirstRowNameSort: `(//button[@title='Sort'])[1]`,
    PDGPromptLabGroupsFirstRowCreatedBy: `//div[@data-rowindex='0']/div[@data-field='created_by']/div[normalize-space()='%s']`,
    PDGPromptLabGroupsFirstRowUpdatedBy: `//div[@data-rowindex='0']/div[@data-field='updated_by']/div[normalize-space()='%s']`,
    PDGPromptLabGroupsFirstRowDescription: `//div[@data-rowindex='0']/div[@data-field='num_of_descriptions']//div[normalize-space()='%s']`,
    PDGPromptLabGroupsFirstRowEditSubmenu: `//div[@data-rowindex='0']//button[@aria-label='sub-menu']`,
    PDGPromptLabGroupsFirstRowEdit: `//li[normalize-space()='Edit']`,
    PDGPromptLabGroupsFirstRowDelete: `//li[normalize-space()='Delete']`,
    PDGPromptLabGroupsFirstRowDeleteYes: `//button[normalize-space()='Delete']`,

    PDGPromptLabCreateNewExperiment: `//button[normalize-space()='New Experiment']`,
    PDGPromptLabCreateTemplate: `//div[@id='select-Template']`,
    PDGPromptLabCreatePreviousConfiguration: `//div[@id="select-Previous Configuration"]`,
    PDGPromptLabCreateTemplateResult: `//li[@label='%s']`,
    PDGPromptLabCreateGenerativeModel: `//div[@id='select-Generative Model']`,
    PDGPromptLabCreateGenerativeModelGPT: `//li[@label='%s']`,
    PDGPromptLabCreateLanguage: `//div[@id='select-Language']`,
    PDGPromptLabCreateLanguageEnglish: `//li[@data-value='%s']`,
    PDGPromptLabCreateGroup: `//div[@id='select-Sample Group Selection']`,
    PDGPromptLabCreateGroupItem: `//li[@label='%s']`,
    PDGPromptLabCreateSaveConfiguration: `//button[normalize-space()='Save Configuration']`,
    PDGPromptLabCreateSaveConfigurationName: `//input[@placeholder='Name Of The Prompt’s Configuration']`,
    PDGPromptLabCreateSaveConfigurationApply: `//button[normalize-space()='Apply']`,
    PDGPromptLabCreateSaveNewConfigurationApply: `//button[normalize-space()='Save as New Configuration']`,
    PDGPromptLabCreateGenerateDescription: `//button[normalize-space()='Generate Description']`,
    PDGPromptLabCreateGeneratedDescription: `//span[@class='MuiTypography-root MuiTypography-bodyLarge css-pg2api']`,
    PDGPromptLabCreateDescriptionParametersApplied: `//p[normalize-space()='Description Parameters Applied']`,
    PDGPromptLabCreateBannedKeywordsExcluded: `//p[normalize-space()='Banned Keywords Excluded']`,
    PDGPromptLabCreateBannedMandatoryKeywordsApplied: `//p[normalize-space()='Mandatory Keywords Applied']`,
    PDGPromptLabCreateImproveTips: `//div[contains(@class,'MuiBox-root css-77m29j')]`,
    PDGPromptLabCreateValidationResults: `//div[@class='MuiGrid-root MuiGrid-container css-1cjns5q']`,
    PDGPromptLabCreateTemplateTitle: `//input[@name="product.title"]`,
    PDGPromptLabCreateTemplateType: `//input[@name="product.product_type"]`,
    PDGPromptLabCreateTemplateBrand: `//input[@name="product.brand"]`,
    PDGPromptLabCreateTemplateColor: `//input[@name="product.color"]`,

    PDGPromptLabManagerConfigSection: `//button[normalize-space()='Go To Configuration Manager']`,
    PDGPromptLabManagerConfigSectionText: `//div[normalize-space()='Configuration Manager']`,
    PDGPromptLabManagerConfigFirstRow: `//div[@data-rowindex='0']`,
    PDGPromptLabManagerConfigFirstRowName: `//div[@data-rowindex='0']//p[contains(text(), "%s")]`,
    PDGPromptLabManagerConfigFirstRowConfigName: `//div[contains(text(),'Config Name')]`,
    PDGPromptLabManagerConfigFirstRowNameSort: `(//button[@title='Sort'])[1]`,
    PDGPromptLabManagerConfigFirstRowCreatedBy: `//div[@data-rowindex='0']/div[@data-field='createdBy']/div[normalize-space()='%s']`,
    PDGPromptLabManagerConfigFirstRowgenerativeMdel: `//div[@data-rowindex='0']/div[@data-field='generative_model']/div[normalize-space()='%s']`,
    PDGPromptLabManagerConfigFirstRowPrompt: `//div[@data-rowindex='0']/div[@data-field='prompt_template']//div[contains(text(), "%s")]`,
    PDGPromptLabManagerConfigFirstRowKeywords: `//div[@data-rowindex='0']/div[@data-field='keywords']//p[contains(text(), "%s")]`,
    PDGPromptLabManagerConfigFirstRowEditSubmenu: `//div[@data-rowindex='0']//button[@aria-label='sub-menu']`,
    PDGPromptLabManagerConfigFirstRowEdit: `//li[normalize-space()='Edit / Load']`,
    PDGPromptLabManagerConfigFirstRowDelete: `//li[normalize-space()='Delete']`,
    PDGPromptLabManagerConfigFirstRowDeleteYes: `//button[normalize-space()='Yes, I do']`,

    PDGPromptLaFirstRowName: `//div[@data-rowindex='0']/div[@data-field='name']/span/button`,
    PDGPromptLabFirstRowModel: `//div[@data-rowindex='0']/div[@data-field='description_parameters.generative_model']//div[contains(text(), "%s")]`,
    PDGPromptLaFirstRowTemplate: `//div[@data-rowindex='0']/div[@data-field='prompt_template_id']//div[contains(text(), "%s")]`,
    PDGPromptLabFirstRowUpdatedBy: `//div[@data-rowindex='0']/div[@data-field='metafields.updated_by']//div[contains(text(), "%s")]`,
    PDGPromptLabFirstRowLastExecution: `//div[contains(text(),'Last Execution')]`,
    PDGPromptLabFirstRowNameSort: `(//button[@title='Sort'])[4]`,

    PDGContentFlowDashboards: `//a[normalize-space()='Validation Dashboard']`,
    PDGContentFlowExecutionHistory: `//a[normalize-space()='Execution History']`,
    PDGContentFlowWorkbench: `//a[normalize-space()='Workbench']`,
    PDGContentFlowSkillManager: `//a[normalize-space()='Skill Manager']`,
    PDGContentFlowDescriptionSamples: `//a[normalize-space()='Description Samples']`,
    PDGContentFlowDescriptionSamplesNew: `//button[normalize-space()='New Samples Group']`,

    PDGContentFlowWorkbenchAdd: `//button[normalize-space()='Add New Pipeline']`,
    PDGContentFlowWorkbenchName: `//input[@name="pipelineName"]`,
    PDGContentFlowWorkbenchSourceUrl: `//input[@name="sourceUrl"]`,
    PDGContentFlowWorkbenchSourceType: `//div[@id='select-Source type']`,
    PDGContentFlowWorkbenchSourceTypeResult: `//li[normalize-space()='%s']`,
    PDGContentFlowWorkbenchSourceTypeDelimeter: `//div[@id='select-Field delimiter']`,
    PDGContentFlowWorkbenchSourceTypeCharacter: `//div[@id='select-Quote character']`,
    PDGContentFlowWorkbenchSourceTypeSkip: `//div[@id='select-Header Rows to skip']`,
    PDGContentFlowWorkbenchSourceTypeFirstResult: `//li[contains(@role,"option") and @tabindex="0"]`,
    PDGContentFlowWorkbenchSourceTypeValidate: `//button[normalize-space()='Validate source']`,
    PDGContentFlowWorkbenchSourceTypeValidateText: `//p[normalize-space()='Succesfully validated source']`,
    PDGContentFlowWorkbenchNext: `//button[normalize-space()='Next']`,
    PDGContentFlowWorkbenchUrlCheckbox: `//span[normalize-space()='url']`,
    PDGContentFlowWorkbenchGMCCheckbox: `//span[normalize-space()='Google Merchant Center (GMC)']`,
    PDGContentFlowWorkbenchHeaderCheckbox: `//span[normalize-space()='Export with the source original headers']`,
    PDGContentFlowWorkbenchHeaderTrustCheckbox: `//input[@value='internal']`,
    PDGContentFlowWorkbenchSchedulingOptions: `//button[normalize-space()='Manual']`,
    PDGContentFlowWorkbenchSchedulingOptionsWeek: `//button[normalize-space()='Weekly']`,
    PDGContentFlowWorkbenchSchedulingOptionsWeekInputTime: `(//div[@class="MuiSelect-select MuiSelect-outlined MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall css-dfo3wy"])[1]`,
    PDGContentFlowWorkbenchSchedulingOptionsWeekInputTimezone: `(//div[@class="MuiSelect-select MuiSelect-outlined MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall css-dfo3wy"])[2]`,
    PDGContentFlowWorkbenchSchedulingOptionsWeekInputTimeValue: `//li[normalize-space()='%s']`,
    PDGContentFlowWorkbenchSchedulingOptionsWeekInputTimezoneValue: `//li[normalize-space()='%s']`,
    PDGContentFlowWorkbenchSchedulingOptionsWeekMon: `//span[@class='MuiTypography-root MuiTypography-labelLarge css-i61lve']`,
    PDGContentFlowWorkbenchSchedulingOptionsDaily: `//button[normalize-space()='Daily']`,
    PDGContentFlowWorkbenchSchedulingOptionsWeekTimezone: `//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1c61h9e']//div[@id='select-undefined']`,
    PDGContentFlowWorkbenchTemplateType: `//div[@id="select-Template type"]`,
    PDGContentFlowWorkbenchTemplateTypeResult: `//*[normalize-space()='%s']`,
    PDGContentFlowWorkbenchTemplateTypeId: `//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-l84vfv']//div[@id='select-product id']`,
    PDGContentFlowWorkbenchTemplateTypeColor: `//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-l84vfv']//div[@id='select-color']`,
    PDGContentFlowWorkbenchTemplateTypeBrand: `//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-l84vfv']//div[@id='select-brand']`,
    PDGContentFlowWorkbenchTemplateTypeType: `//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-l84vfv']//div[@id='select-product type']`,
    PDGContentFlowWorkbenchTemplateTypeTitle: `//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-l84vfv']//div[@id='select-title']`,
    PDGContentFlowWorkbenchTemplateTypeParameter: `//li[normalize-space()='%s']`,
    PDGContentFlowWorkbenchGenerativeModel: `//div[@id='select-Generative Model']`,
    PDGContentFlowWorkbenchModelResult: `//li[@label ='%s']`,
    PDGContentFlowWorkbenchMaxTokens: `//input[@name='maxTokens']`,
    PDGContentFlowWorkbenchMaxTokensTip: `//p[normalize-space()='Limit can go from 40 to 10000 characters.']`,
    PDGContentFlowWorkbenchHitlOff: `//span[normalize-space()='HITL Off']`,
    PDGContentFlowWorkbenchHitlOn: `//span[normalize-space()='HITL On']`,
    PDGContentFlowWorkbenchHitlOnStyleValidation: `//span[normalize-space()='Style Validation']`,
    PDGContentFlowWorkbenchHitlOnSamplesGroup: `//input[@value='samplesGroup']`,
    PDGContentFlowWorkbenchHitlOnSamplesGroupSection: `//div[@id='select-Group Selection']`,
    PDGContentFlowWorkbenchHitlOnSamplesGroupResult: `//li[contains(text(),'%s')]`,
    PDGContentFlowWorkbenchMaxLanguage: `//div[@id='select-Language']`,
    PDGContentFlowWorkbenchMaxLanguageResult: `//li[normalize-space()='%s']`,
    PDGContentFlowWorkbenchMaxExtraPrompt: `//input[@placeholder='Write the prompts as much detailed as possible']`,
    PDGContentFlowWorkbenchMaxExtraPromptDelete: `//button[normalize-space()='Delete']`,
    PDGContentFlowWorkbenchMaxExtraPromptAdd: `//button[normalize-space()='Add Extra Prompt']`,
    PDGContentFlowWorkbenchMaxExtraPromptCheck: `//span[normalize-space()='%s']`,
    PDGContentFlowWorkbenchMaxSavePipeline: `//button[normalize-space()='Save Pipeline']`,
    PDGContentFlowWorkbenchMaxSuccesfullyMsg: `//h2[contains(text(),'You have successfully completed the pipeline configuration.')]`,
    PDGContentFlowWorkbenchBannedKeywords: `(//input[@type ='text'])[1]`,
    PDGContentFlowWorkbenchEditBannedKeywords: `//button[normalize-space()='Edit Banned Keywords']`,
    PDGContentFlowWorkbenchEditBannedKeywordsEdit: `//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-1puoedb']//button[1]`,
    PDGContentFlowWorkbenchEditBannedKeywordsEditInput: `//input[@id='input-with-icon-adornment']`,
    PDGContentFlowWorkbenchEditBannedKeywordsEditInputApply: `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-dzv4fs']//*[name()='svg']`,
    PDGContentFlowWorkbenchEditBannedKeywordsEditLanguage: `//div[@id='select-']`,
    PDGContentFlowWorkbenchEditBannedKeywordsEditLanguageResult: `//span[normalize-space()='%s']`,
    PDGContentFlowWorkbenchEditBannedKeywordsSaveChanges: `//button[normalize-space()='Save Changes']`,
    PDGContentFlowWorkbenchBannedLanguage: `(//div[@id="select-Language"])[1]`,
    PDGContentFlowWorkbenchMandatoryKeywords: `(//input[@type ='text'])[2]`,
    PDGContentFlowWorkbenchConfirmBannedKeywords: `//button[normalize-space()='Confirm Banned Keywords']`,
    PDGContentFlowWorkbenchConfirmMandatoryKeywords: `//button[normalize-space()='Confirm Mandatory Keywords']`,
    PDGContentFlowWorkbenchMandatoryLanguage: `(//div[@id="select-Language"])[2]`,
    PDGContentFlowWorkbenchEditMandatoryKeywords: `//button[normalize-space()='Edit Mandatory Keywords']`,
    PDGContentFlowWorkbenchEditMandatoryKeywordsEdit: `//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-1puoedb']//button[1]`,
    PDGContentFlowWorkbenchEditMandatoryKeywordsEditInput: `//input[@id='input-with-icon-adornment']`,
    PDGContentFlowWorkbenchEditMandatoryKeywordsEditInputApply: `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-dzv4fs']//*[name()='svg']`,
    PDGContentFlowWorkbenchEditMandatoryKeywordsEditLanguage: `//div[@id='select-']`,
    PDGContentFlowWorkbenchEditMandatoryKeywordsEditLanguageResult: `//span[normalize-space()='%s']`,
    PDGContentFlowWorkbenchEditMandatoryKeywordsSaveChanges: `//button[normalize-space()='Save Changes']`,
    PDGContentFlowWorkbenchMandatoryLanguageResult: `//span[normalize-space()='%s']`,
    PDGContentFlowWorkbenchMandatoryLanguageApply: `//button[normalize-space()='Apply']`,
    PDGContentFlowWorkbenchBannedKeywordsLanguage: `//span[normalize-space()='%s']`,
    PDGContentFlowWorkbenchMandatoryKeywordsLanguage: `//span[normalize-space()='%s']`,
    PDGContentFlowWorkbenchLoadSavedConfiguration: `//button[normalize-space()='Load Saved Configuration']`,

    PDGContentFlowFirstHeaderName: `//div[contains(text(),'Pipeline Name')]`,
    PDGContentFlowFirstHeaderLaunched: `//div[contains(text(),'Launched')]`,
    PDGContentFlowFirstRowNameSortLastExec: `(//button[@title='Sort'])[2]`,
    PDGContentFlowFirstRowNameSort: `(//button[@title='Sort'])[1]`,
    PDGContentFlowFirstRowName: `//div[@data-rowindex='0']//p[contains(text(), "%s")]`,
    PDGContentFlowFirstRowMetrics: `//div[@data-rowindex='0']/div[@data-field='metrics']`,
    PDGContentFlowFirstRowStatus: `//div[@data-rowindex='0']//button[@aria-label='%s']`,
    PDGContentFlowFirstRowAvailability: `//div[@data-rowindex='0']//p[contains(text(), '%s')]`,
    PDGContentFlowFirstRowSubMenu: `//div[@data-rowindex='0']//button[@aria-label='sub-menu']`,
    PDGContentFlowFirstRowSubMenuEdit: `//li[normalize-space()='Edit']`,
    PDGContentFlowFirstRowSubMenuDublicate: `//li[normalize-space()='Duplicate']`,
    PDGContentFlowFirstRowSubMenuDelete: `//li[normalize-space()='Delete']`,
    PDGContentFlowFirstRowSubMenuConfirmDelete: `//button[normalize-space()='Delete']`,
    PDGContentFlowFirstRowSubMenuDownload: `//li[normalize-space()='Download']`,
    PDGContentFlowFirstRowSubMenuCopyURLLink: `//li[normalize-space()='Copy URL link']`,
    PDGContentFlowFirstRowSubMenuLaunch: `//li[normalize-space()='Launch']`,
    PDGContentFlowFirstRowSubMenuDeactive: `//li[normalize-space()='Deactivate']`,
    PDGContentFlowFirstRowSubMenuActive: `//li[normalize-space()='Activate']`,
    PDGContentFlowFirstRowSubMenuOptimized: `//div[@data-rowindex='0']//div[@data-field='metrics']`,
    PDGContentFlowFirstRowSubMenuLastExecuted: `//div[@data-rowindex='0']//div[@data-field='last_execution']`,
    PDGContentFlowFirstRowRefresh: `//button[normalize-space()='Refresh']`,
    PDGContentFlowFirstRowSubMenuLaunched: `//div[@data-rowindex='0']//div[@data-field='launched']`,

    PDGContentFlowDashBoardSubPipelineName: `//div[@class="MuiBox-root css-q4urom"]//p[contains(text(), '%s')]`,
    PDGContentFlowDashBoardSubPipelineNameHITL: `//div[@class='MuiGrid-root MuiGrid-container css-19565kc']//p[contains(text(), '%s')]`,
    PDGContentFlowDashBoardSubActivePipelineText: `//p[contains(text(), 'Active Executions')]`,
    PDGContentFlowDashBoardSubActiveFirstItemFrame: `//div[@class="MuiGrid-root css-r1zddt"]`,
    PDGContentFlowDashBoardSubCreatedBy: `(//div[@class="MuiBox-root css-q4urom"]//p[contains(text(), "%s")])[1]`,
    PDGContentFlowDashBoardStatusRunning: `(//div[@class="MuiBox-root css-q4urom"]//p[contains(text(), 'running')])[1]`,
    PDGContentFlowDashBoardActiveShowAll: `(//button[normalize-space()='Show All'])[1]`,
    PDGContentFlowDashBoardHITLShowAll: `(//button[normalize-space()='Show All'])[1]`,
    PDGContentFlowDashBoardPendingName: `//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-gfsmc7"]//p[contains(text(), '%s')]`,
    PDGContentFlowDashboardFirstValue: `//div[@data-rowindex='0']//div[contains(text(), "%s")]`,
    PDGContentFlowDashboardFirstValueGo: `//div[@class='even MuiDataGrid-row']//button[@type='button'][normalize-space()='Go']`,
    PDGContentFlowDashboardFirstValueGoValue: `//p[contains(text(), '%s')]`,

    iFrame: `#app iframe`,
    HiddenState: `{state: "hidden"}`,
    VisibleState: `{state: "visible"}`,
    Class: `aria-selected`,
}

module.exports = xpaths
