{
  "applyUCGToExistingCampaigns": true,
  "gbp": "https://msdk-files.webengage.com/sdk/2/0.1/",
  "domain": "Shubham Naidu",
  "tzo": 19800,
  "grs": ["fonts/mwidget.ttf", "js/notification-prepare.js"],
  "notificationRuleList": [
    [
      {
        "excludeUCG": false,
        "timeSpent": 0,
        "rules": {
          "pageRuleCode": "true",
          "sessionRuleCode": "true",
          "eventRuleCode": "(  (  (  (  ($we_exists($we_getData(\"event\"->\"Outlet_visit\"->\"Outlet_visit\")))  ) ) ) )"
        },
        "showOnExit": false,
        "totalTimeOnSite": 0,
        "variations": [
          {
            "layout": "1af57682",
            "resources": [],
            "lmts": 1779330605000,
            "id": "~10cb34557",
            "sampling": 100,
            "tokens": [["event", "custom", "Outlet_visit", "custom", "Outlet_visit"]]
          }
        ],
        "lc": "10D",
        "lcs": "id_scope_1",
        "notificationEncId": "9fj1mk",
        "creationTimestamp": "2026-05-21 13:27:42.0",
        "maxTimesPerUser": 5,
        "fc": false,
        "skipTargetPage": false,
        "startTimestamp": 1779357000000,
        "order": 0
      }
    ]
  ],
  "lsl": {
    "id_scope_1": {
      "value": "$we_getData(\"event\"->\"Outlet_visit\"->\"Outlet_visit\")",
      "variables": [
        ["user", "system", "email"],
        ["event", "custom", "Outlet_visit", "Outlet_visit"]
      ]
    }
  },
  "geoFences": {},
  "events": {},
  "ecl": [],
  "cgDetails": {},
  "properties": []
}
