---
title: "Getting Started"
description: "One page summary of how to start a new Doks project."
lead: "One page summary of how to start a new Doks project."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
docs:
parent: "prologue"
weight: 110
toc: true
---

# Getting Started with Mainzelliste
The following steps will give you a first overview of how to run a Mainzelliste instance and perform
basic tasks. This is one of many ways to use the Mainzelliste; for more details and to understand
each API call below, please have the [API Documentation](https://bitbucket.org/medicalinformatics/mainzelliste/downloads/Mainzelliste_Schnittstelle_v3.1.0.pdf) ready.

Mainzelliste comes packaged in a well-documented, versatile Docker container; find more info [at](.././docker.md).
For now, just run the mainzelliste with the default docker-compose config:
```shell
docker-compose up
```

You should now reach Mainzelliste at http://localhost:8080. Needless to say, not use real identifying data in the following steps.

## Task 1: Add new Patient and generate Pseudonym
---

### 1. Create Mainzelliste Session <a name="tutorial-1.1"></a>
To authenticate, each request needs to provide a valid token (See [API Documentation](https://bitbucket.org/medicalinformatics/mainzelliste/downloads/Mainzelliste_Schnittstelle_v3.1.0.pdf)).
These tokens are in turn bundled into a Session. So first create a session with the following _cURL_ statement:
```bash
curl --location --request POST 'localhost:8080/sessions' \
--header 'mainzellisteApiKey: changeThisApiKey' \
--header 'mainzellisteApiVersion: 3.1'
```
The returned session json object:
```json
{
  "sessionId": "{session-id}",
  "uri": "http://localhost:8080/sessions/{session-id}/"
}
```

### 2. Create Mainzelliste addPatient Token
We would like to allow the bearer of the token to create up to 10 patient datasets and receive the
pseudonym of type â€œpidâ€. Use the `{session-id}` you created in the preview step as an url parameter
and run the following _cURL_ statement:
```bash
curl --location --request POST 'localhost:8080/sessions/{session-id}/tokens' \
--header 'Content-Type: application/json' \
--header 'mainzellisteApiKey: changeThisApiKey' \
--header 'mainzellisteApiVersion: 3.1' \
--data-raw '{
	"type": "addPatient",
    "allowedUses": "10",
    "data": {
        "idtypes": ["pid"]
    }
}'
```
The returned token json object:
```json
{
  "id": "{token-id}",
  "type": "addPatient",
  "allowedUses": 10,
  "remainingUses": 10,
  "data": {
    "idTypes": [
      "pid"
    ]
  },
  "uri": "http://localhost:8080/sessions/{session-id}/tokens/{token-id}"
}
```

### 3. Open Add Patient Form in Web browser <a name="tutorial-1.3"></a>
Open a web browser and use the `{token-id}` you created in the preview step as url parameter:
```url
http://localhost:8080/html/createPatient?tokenId={token-id}
```
You will see a simple, built-in web form baked directly into Mainzelliste â€“ one of many ways users can create pseudonyms.

[//]: # (![Create Patient Form]&#40;./images/mainzelliste-createPatient-html.png&#41;{width=400})

### 4. Add Patient Identifying Data and Generate ID <a name="tutorial-1.4"></a>
Now enter the patient identifying data and submit the form.

[//]: # (![Generated ID]&#40;./images/mainzelliste-createPatient-result-html.png&#41;{width=350})

:fireworks: Congratulations, you've just pseudonymized your first patient ! :fireworks:

## Task 2: Add new Patient and control user navigation flow
---

The Mainzelliste API can accommodate a wide variety of use-cases. For example, as a developer of the
MDAT application, you can control what a user sees and what the web browser does after submitting
IDAT. We will now add a new patient just like in Task 1 but redirect the user after submission to a
specific webpage.

### 1. Create Mainzelliste Session
Repeat [step 1 in task 1](#tutorial-1.1), or just re-use the existing session.

### 2. Create Mainzelliste addPatient Token
The attribute `redirect` of the json object `data` allows you to configure a redirect url. Use the `{session-id}` you created in the preview step as an url parameter and run the following _cURL_ statement:
```bash
curl --location --request POST 'localhost:8080/sessions/{session-id}/tokens' \
--header 'Content-Type: application/json' \
--header 'mainzellisteApiKey: changeThisApiKey' \
--header 'mainzellisteApiVersion: 3.1' \
--data-raw '{
	"type": "addPatient",
    "allowedUses": "10",
    "data": {
        "idtypes": ["pid"],
        "redirect": "https://httpbin.org/get?pid={pid}&tid={tokenId}"
    }
}'
```
The returned token json object:
```json
{
  "id": "{token-id}",
  "type": "addPatient",
  "allowedUses": 10,
  "remainingUses": 10,
  "data": {
    "redirect": "https://httpbin.org/get?pid={pid}&tid={tokenId}",
    "idTypes": [
      "pid"
    ]
  },
  "uri": "http://localhost:8080/sessions/{session-id}/tokens/{token-id}"
}
```

### 3. Open Add Patient Form in Web browser
Same as [step 3 in task 1](#tutorial-1.3)

### 4. Add Patient Identifying Data and Generate ID
Same as [step 4 in task 1](#tutorial-1.4)

### 5. Print Result and Redirect the User
After pressing the submit button to print the result you will be redirected to the url you configured in step 2.

[//]: # (![Generated ID with Print button]&#40;./images/mainzelliste-createPatient-print-result-html.png&#41;{width=350})

You can also hide the identifying data in the result page by setting the following configuration
variables (See [Configuration Handbook](https://bitbucket.org/medicalinformatics/mainzelliste/downloads/Mainzelliste__Konfigurationshandbuch_v1.8.pdf)):
```properties
result.printIdat = false
```

[//]: # (![Generated ID with Redirect button]&#40;./images/mainzelliste-createPatient-result-redirect-html.png&#41;{width=350})

Or you can hide the result screen altogether
```properties
result.show = false
```

## Task 3: Edit Patient identifying data
---

We will now edit an existing dataset.

### 1. Create Mainzelliste Session
Repeat [step 1 in task 1](#tutorial-1.1), or just re-use the existing session.

### 2. Create Mainzelliste editPatient Token
We want the bearer of the token to edit the IDAT of the dataset with pid â€œ0003Y0WZâ€œ. At the same
time, we want to hide the pseudonym. Use the `{session-id}` you created in the preview step as an
url parameter and run the following _cURL_ statement:

```bash
curl --location --request POST 'localhost:8080/sessions/{session-id}/tokens' \
--header 'Content-Type: application/json' \
--header 'mainzellisteApiKey: changeThisApiKey' \
--header 'mainzellisteApiVersion: 3.1' \
--data-raw '{
	"type": "editPatient",
    "data": {
        "patientId": {
          "idType": "pid",
          "idString": "0003Y0WZ"
        },
        "fields": [
          "vorname",
          "nachname",
          "geburtsname",
          "plz",
          "ort",
          "geburtstag",
          "geburtsmonat",
          "geburtsjahr"
        ]
    }
}'
```
The returned token json object:
```json
{
  "id": "{token-id}",
  "type": "editPatient",
  "allowedUses": 1,
  "remainingUses": 1,
  "data": {
    "patientId": {
      "idType": "pid",
      "idString": "0003Y0WZ"
    },
    "fields": [
      "vorname",
      "nachname",
      "geburtsname",
      "plz",
      "ort",
      "geburtstag",
      "geburtsmonat",
      "geburtsjahr"
    ]
  },
  "uri": "http://localhost:8080/sessions/{session-id}/tokens/{token-id}"
}
```

### 3. Edit Patient Identifying data in Web browser
Open a web browser and use the `{token-id}` you created in the preview step as url parameter:
```url
http://localhost:8080/html/editPatient?tokenId={token-id}
```
Edit the desired fields, then submit the page

[//]: # (![Create Patient Form]&#40;./images/mainzelliste-editPatient-html.png&#41;{width=70%})

Congratulations, you have just explored some basic Mainzelliste functionality. But you have just
scratched the surface. Mainzelliste comes with a comprehensive API, allowing you to use it in a
myriad of pseudonymization schemes, attach your own applications, hide or show pseudonyms or build
advanced workflows such as selecting an existing patient or transparently loading IDAT into other applications.

For more details, please look into the Mainzelliste documentation, in particular the
[API Documentation](https://bitbucket.org/medicalinformatics/mainzelliste/downloads/Mainzelliste_Schnittstelle_v3.1.0.pdf).
