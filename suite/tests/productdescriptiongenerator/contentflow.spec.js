import {test} from '@playwright/test';
import {Login, Logout} from "../../../actions/user/login";
import {Open, CreateWorkbench, ValidateWorkbench, OpenGroup, UpdateWorkbench,
            Active, Deactive, Launch, Delete, LaunchValidation} from "../../../actions/productdescriptiongenerator/contentflow";
import {ContentFlow, UpdateContentFlow} from "../../../models/productdescriptiongenerator/contentflow";
import {CreateGroup, GroupDelete} from "../../../actions/productdescriptiongenerator/promptslab";
import {config} from "../../../config/config";

ContentFlow.Name = config.prefixTrust + Date.now()
ContentFlow.GroupName = config.prefixTrust + Date.now()
UpdateContentFlow.Name = config.prefixTrust + "Update-" +  Date.now()
UpdateContentFlow.GroupName = ContentFlow.GroupName
UpdateContentFlow.OldName = ContentFlow.Name

test('Test ContentFlow Smoke', async ({page}) => {
    test.setTimeout(config.timeout)
    await test.step("Login", async () => {
        await Login(page, config);
    })

    await test.step("ContentFlow Open", async () => {
        await Open(page)
    })
    await test.step("ContentFlow Create Group", async () => {
        await OpenGroup(page)
        await CreateGroup(page, ContentFlow);
    })
    await test.step("ContentFlow Create Workbench", async () => {
        await CreateWorkbench(page, ContentFlow);
    })
    await test.step("ContentFlow Validate Workbench", async () => {
        await Open(page)
        await ValidateWorkbench(page, ContentFlow);
    })
    await test.step("ContentFlow Update Workbench", async () => {
        await Open(page)
        await UpdateWorkbench(page, UpdateContentFlow);
    })
    await test.step("ContentFlow Validate Updated Workbench", async () => {
        await Open(page)
        await ValidateWorkbench(page, UpdateContentFlow);
    })
    await test.step("ContentFlow Active Workbench", async () => {
        await Open(page)
        await Active(page, UpdateContentFlow);
    })
    await test.step("ContentFlow Launch Workbench", async () => {
        await Open(page)
        await Launch(page, UpdateContentFlow);
    }) 
    await test.step("ContentFlow Deactive Workbench", async () => {
        await Open(page)
        await Deactive(page, UpdateContentFlow);
    })
    await test.step("ContentFlow Launch Workbench Validation", async () => {
        await Open(page)
        await LaunchValidation(page, UpdateContentFlow, config);
    }) 
    await test.step("ContentFlow Delete Group", async () => {
        await Open(page)
        await OpenGroup(page)
        await GroupDelete(page, UpdateContentFlow);
    }) 
    await test.step("ContentFlow Delete Workbench", async () => {
        await Open(page)
        await Delete(page, UpdateContentFlow);
    }) 

    await test.step("Log Out", async () => {
        await Logout(page);
    })
})
