export const locators = {
  listItemAnnouncements: 'listitem:has-text("Announcements")',
  newAnnouncementBtn: 'button:has-text("New Announcement")',
  titleField: '//input[@id="announcementTitle"]',
  descriptionField: 'div.ql-editor.ql-blank[contenteditable="true"]',
  needsAcknowledgementCheckbox: 'text:has-text("Needs Acknowledgement?")',
  configurePublishBtn: '//button[text()="Configure & Publish"]',
  selectEmpGroups: '//label[@for="employeeWise"]',
  selectGroups: '//label[@for="groupWise"]',
  acknowledgeBtn: "//label[@for='acknowledgementToggle']",
  listAckBtn: '//*[@id="acknowledgeButton"]/button',
  includeAllEmployeesCheckbox: '//label[@for="includeAllEmployees"]',
  chooseEndDateField: '[formcontrolname="endDate"]',
  publishLater: "//label[@for='publishLater']",
  chooseStartDateField: '[formcontrolname="startDate"]',
  chooseDateField: '[formcontrolname="endDate"]', master
  datePickerDay: 'text:has-text("3")',
  publishBtn: '//button[text()="Publish"]',
  draftBtn: '//button[text()="Save as Draft"]',
  updateEllipsis:
    '//*[@id="preload"]/xhr-app-root/div/app-reachout/div/div/reachout-announcements/reachout-announcements-list/div[4]/div[1]/div[1]/div/div/div[2]/div[2]/engage-announcement-actions/div',
  deleteAnnouncementBtn: '//a[@class="dropdown-item" and text()="Delete"]',
  deleteConfirmBtn: '//button[text()="Delete"]',
  annBtnFromWall: "//a/div/span[contains(@class, 'ki ki-add')]",
  editLinkBtn: 'a.dropdown-item[href*="engage/announcements/edit"]',
  toastMessage: '//*[@id="toast-container"]',
  todayDateCell: "span.today-date-highlight",
  settingsBtn: "//a[@title='Settings']",
<<<<<<< HEAD:Keka-engage/Locators/Announcementlocators.ts
  rolesandpermissionbtn: "//a/label[contains(text(), 'Roles & Permissions')]",
  hrManagerRole:
    "//p[contains(text(), 'HR Manager')]/ancestor::td//span[contains(@class, 'ki-edit')]",
  featureEngage: "//label[text()='Engage']",
  EngageAllpermissions: "//label[@for='Employee Communication Privileges']",
  manageAnnouncement: "//label[@for='Engage.ManageAnnouncements0']",
  updateBtnPermissions: "//button[text()='Update']",
  addAttachmentBtn: "//input[@accept='.png,.jpg,.jpeg,.pdf']",
  uploadImage: "//button[text()='Upload image']",

};
=======
  rolesandpermissionbtn : "//a/label[contains(text(), 'Roles & Permissions')]",
  hrManagerRole : "//p[contains(text(), 'HR Manager')]/ancestor::td//span[contains(@class, 'ki-edit')]",
  featureEngage : "//label[text()='Engage']",
  EngageAllpermissions : "//label[@for='Employee Communication Privileges']",
  manageAnnouncement : "//label[@for='Engage.ManageAnnouncements0']",
  updateBtnPermissions : "//button[text()='Update']",
};
>>>>>>> 2ab5a525a25f77e77856c77b7d46c033b8423e88:Keka-engage/Locators/locators.ts
