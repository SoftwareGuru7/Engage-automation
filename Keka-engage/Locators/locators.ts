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
  chooseDateField: '[formcontrolname="endDate"]',
  datePickerDay: 'text:has-text("3")',
  publishBtn: '//button[text()="Publish"]',
  draftBtn: '//button[text()="Save as Draft"]',
  updateEllipsis: '//*[@id="preload"]/xhr-app-root/div/app-reachout/div/div/reachout-announcements/reachout-announcements-list/div[4]/div[1]/div[1]/div/div/div[2]/div[2]/engage-announcement-actions/div',
  deleteAnnouncementBtn: '//a[@class="dropdown-item" and text()="Delete"]',
  deleteConfirmBtn: '//button[text()="Delete"]',
  annBtnFromWall: "//a/div/span[contains(@class, 'ki ki-add')]",
  editLinkBtn: 'a.dropdown-item[href*="engage/announcements/edit"]',
  toastMessage: '//*[@id="toast-container"]',
  todayDateCell: "span.today-date-highlight",
};