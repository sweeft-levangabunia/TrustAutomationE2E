import {test} from '@playwright/test';
import {Login, Logout} from "../../../actions/user/login";
import {Open, CreateExperiment, CreateGroup, OpenGroups,GroupValidate,
          UpdateExperimentValidate, ExperimentDelete, ExperimentValidate,
             OpenManagerConfig, Validate, UpdateGroup, GroupDelete, UpdateExperiment} 
                from "../../../actions/productdescriptiongenerator/promptslab";
import {Promptslab, UpdatePromptslab} from "../../../models/productdescriptiongenerator/promptslab";
import {config} from "../../../config/config";

Promptslab.Name = config.prefixTrust + Date.now()
Promptslab.GroupName = config.prefixTrust + Date.now()
UpdatePromptslab.Name = config.prefixTrust + "Update-" +  Date.now()
UpdatePromptslab.GroupName = config.prefixTrust + "Update-" + Date.now()

test('Test Promptslab Smoke', async ({page}) => {
    test.setTimeout(config.timeout)
    await test.step("Login", async () => {
        await Login(page, config);
    })

    await test.step("Promptslab Open", async () => {
        await Open(page)
    })
    await test.step("Promptslab Create Group", async () => {
        await OpenGroups(page)
        await CreateGroup(page, Promptslab);
    })
    await test.step("Promptslab Validate Group", async () => {
        await GroupValidate(page, Promptslab, config);
    })
    await test.step("Promptslab Create Experiment", async () => {
        await Open(page)
        await CreateExperiment(page, Promptslab);
    })
    await test.step("Promptslab Validate Experiment Manager Config", async () => {
        await Open(page)
        await OpenManagerConfig(page)
        await ExperimentValidate(page, Promptslab, config);
    })
    // await test.step("Promptslab Validate Experiment", async () => {
    //     await Open(page)
    //     await Validate(page, Promptslab, config);
    // })
    await test.step("Promptslab Update Group", async () => {
        await OpenGroups(page)
        await UpdateGroup(page, UpdatePromptslab);
    })
    await test.step("Promptslab Validate Update Group", async () => {
        await GroupValidate(page, UpdatePromptslab, config);
    })
    await test.step("Promptslab Update Experiment Manager Config", async () => {
        await Open(page)
        await OpenManagerConfig(page)
        await UpdateExperiment(page, UpdatePromptslab);
    })
    await test.step("Promptslab Delete Experiment Manager Config", async () => {
        await Open(page)
        await OpenManagerConfig(page)
        await ExperimentDelete(page, Promptslab);
    })
    await test.step("Promptslab Validate Update Experiment Manager Config", async () => {
        await Open(page)
        await OpenManagerConfig(page)
        await UpdateExperimentValidate(page, UpdatePromptslab, config);
    })
    await test.step("Promptslab Delete Group", async () => {
        await OpenGroups(page)
        await GroupDelete(page, UpdatePromptslab);
    })
    await test.step("Promptslab Delete Updated Experiment Manager Config", async () => {
        await Open(page)
        await OpenManagerConfig(page)
        await ExperimentDelete(page, UpdatePromptslab);
    })
    await test.step("Promptslab Validate Update Experiment", async () => {
        await Open(page)
        await Validate(page, UpdatePromptslab, config);
    })

    await test.step("Log Out", async () => {
        await Logout(page);
    })
})
