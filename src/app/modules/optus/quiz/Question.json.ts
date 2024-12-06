export const OptusQuestion =
{
    QuestionData:[
        {
            "Section": "A",
            "Section_Name": "Compliance & certifications",
            "Questions": [

            ]
        },
        {
            "Section": "B",
            "Section_Name": "Compliance & certifications",
            "Questions": [
                {
                    "Question_No": "1",
                    "Question": "Is an information security policy in place?If yes, what is the process and frequency followed for the review of the Information security policy?"
                },
                {
                    "Question_No": "2",
                    "Question": "Do you have contractual provisions/control mechanisms to ensure that privacy and security obligations required by Organisation are extended to your suppliers, vendors, or subcontractors? Do you have a third-party risk management policy in place? Are any information security risk assessments conducted on third parties? Is there a centrally managed system used to manage third-party-related findings and track compliance with Organisation's requirements? Are contracts in place with all third parties? Is there an NDA signed with all third parties who have access to Organisation's data?"
                },
                {
                    "Question_No": "3",
                    "Question": "Is there a process to identify and log subcontractor information security, privacy, and/or data breach issues?"
                },
                {
                    "Question_No": "4",
                    "Question": "Do you maintain any independent compliance assessment for security standards such as SOC2, PCI-DSS certification, etc.? Provide a copy of the latest certification."
                }
            ]
        },
        {
            "Section": "C",
            "Section_Name": "Privacy",
            "Questions": [
                {
                    "Question_No": "5",
                    "Question": "Do you have a documented privacy policy in place, and does it comply with Australian Privacy Principles (APPs)?"
                },
                {
                    "Question_No": "6",
                    "Question": "Do you perform Privacy Impact Assessments (PIA) when conducting risk or large-scale processing of personal data?"
                },
                {
                    "Question_No": "7",
                    "Question": "Do you attest to compliance with data privacy requirements on an annual basis?"
                },
                {
                    "Question_No": "8",
                    "Question": "Are employees and contractors required to complete privacy training?"
                },
                {
                    "Question_No": "9",
                    "Question": "Are systems in place to monitor for privacy breaches and notify customers expeditiously if a privacy event may have impacted their data?"
                },
                {
                    "Question_No": "10",
                    "Question": "What controls have been deployed to protect Organisation's data (transmit, process, store), including its PII/sensitive data?"
                },
                {
                    "Question_No": "11",
                    "Question": "What process do you implement to ensure proper disposal of Organisation's data? (e.g., degaussing/cryptographic wiping)"
                }
            ]
        },
        {
            "Section": "D",
            "Section_Name": "Incident response",
            "Questions": [
                {
                    "Question_No": "12",
                    "Question": "Is an incident management policy in place?"
                },
                {
                    "Question_No": "13",
                    "Question": "Do you inform Organisation of any security incident that has or may impact any Organisation data?"
                },
                {
                    "Question_No": "14",
                    "Question": "Do you have a response team in place?"
                },
                {
                    "Question_No": "15",
                    "Question": "If yes, is the team available 24*7*365?"
                },
                {
                    "Question_No": "16",
                    "Question": "Is a centralized system in place to manage incidents and track through remediation?"
                }
            ]
        },
        {
            "Section": "E",
            "Section_Name": "Vulnerability Management",
            "Questions": [
                {
                    "Question_No": "17",
                    "Question": "Are vulnerability scans run on a regular basis?"
                },
                {
                    "Question_No": "18",
                    "Question": "Is a penetration test conducted on the external facing network and internet facing applications?"
                },
                {
                    "Question_No": "19",
                    "Question": "Do you have a log management policy?"
                },
                {
                    "Question_No": "20",
                    "Question": "Do you capture logs for the following:\nUser access logs\nAdministrator access logs\nNetwork access logs\nFacility logs (e.g., BMS)"
                },
                {
                    "Question_No": "21",
                    "Question": "What is your subsequent process for documenting and tracking the remediation of identified vulnerabilities?"
                }
            ]
        },
        {
            "Section": "F",
            "Section_Name": "Cloud Security",
            "Questions": [
                {
                    "Question_No": "22",
                    "Question": "Are clients notified before a change is made in the environment?"
                },
                {
                    "Question_No": "23",
                    "Question": "Is Organisation's data being stored in the location as per the agreement with Organisation? Which legal jurisdiction does Organisation's data reside in? (Please list the countries)"
                },
                {
                    "Question_No": "24",
                    "Question": "Does the ability exist to legally demonstrate sufficient data segmentation, in the event of an incident? (Please provide architectural diagrams demonstrating logical segregation of data and clients)"
                },
                {
                    "Question_No": "25",
                    "Question": "What security controls (e.g., two-factor authentication) have been implemented for preventing unauthorized access to the production cloud environment containing Organisation's Data?"
                },
                {
                    "Question_No": "26",
                    "Question": "Is the cloud encryption key managed by your company?\nDoes the cloud provider allow remote administrative access?\nDoes the cloud provider provide access to system logs?\nDoes the cloud provider provide access to security alerts?"
                }
            ]
        },
        {
            "Section": "G",
            "Section_Name": "Infrastructure Security & Log",
            "Questions": [
                {
                    "Question_No": "27",
                    "Question": "Do you have documented information security baselines for every component of your infrastructure (e.g., Hardening standards, Login Password, antimalware, Full Disk Encryption, Administrative Privileges, Firewall, Auto-lock, etc.)?"
                },
                {
                    "Question_No": "28",
                    "Question": "Is use of removable media prohibited on in-scope devices that contain Organisation data? If yes, please detail the technical control."
                },
                {
                    "Question_No": "29",
                    "Question": "How are you protecting sensitive network traffic over public networks? What cryptographic frameworks are used to secure data in transit over public networks?"
                },
                {
                    "Question_No": "30",
                    "Question": "Do you have breach detection systems and/or anomaly detection with alerting? (e.g., IDS/IPS)"
                },
                {
                    "Question_No": "31",
                    "Question": "Is the production network segmented into different zones based on security levels?"
                },
                {
                    "Question_No": "32",
                    "Question": "Are all security events (e.g., authentication events, SSH session commands, privilege elevations) in production logged? If yes, what is the retention period?"
                }
            ]
        },
        {
            "Section": "H",
            "Section_Name": "Software Development Security",
            "Questions": [
                {
                    "Question_No": "33",
                    "Question": "Are you following SSDLC/Secure Coding Practices (secure system engineering and coding practices established, documented, communicated, and integrated within the SDLC)?"
                },
                {
                    "Question_No": "34",
                    "Question": "Are the development, test, and production environments segregated? If yes, please describe the roles that have access to each environment."
                },
                {
                    "Question_No": "35",
                    "Question": "What types of security reviews do you perform on custom-built software?"
                }
            ]
        },
        {
            "Section": "I",
            "Section_Name": "Access Control",
            "Questions": [
                {
                    "Question_No": "36",
                    "Question": "Are all user IDs unique?"
                },
                {
                    "Question_No": "37",
                    "Question": "Are user rights reviewed on at least a quarterly basis (normal users, administrative and remote users)?"
                },
                {
                    "Question_No": "38",
                    "Question": "Is remote access allowed on systems that have Organisation data? (Yes/No). If yes:\n- Do you have a remote access policy?\n- Are remote users prevented from copying data to remote devices?\n- Are encrypted communications required for all remote connections?\n- Is multi-factor authentication required for remote access?"
                },
                {
                    "Question_No": "39",
                    "Question": "Are passwords required to access systems transmitting, processing, or storing Organisation's Data?"
                },
                {
                    "Question_No": "40",
                    "Question": "Is an inactive user ID deleted or disabled within 90 days?"
                },
                {
                    "Question_No": "41",
                    "Question": "Are vendor default passwords removed, disabled, or changed prior to placing the device or system into production?"
                }
            ]
        },
        {
            "Section": "J",
            "Section_Name": "Human Resource Security",
            "Questions": [
                {
                    "Question_No": "42",
                    "Question": "Are background checks performed on employees and contractors before they are granted access to data?\n- Are employees and contractors required to sign an NDA or confidentiality agreement?\n- Are employees and contractors required to sign an acceptable use policy?\n- Are employees and contractors required to sign a code of conduct?"
                },
                {
                    "Question_No": "43",
                    "Question": "Are employees and contractors required to complete a security awareness training? If yes, please list the topics covered and the frequency of the required training."
                },
                {
                    "Question_No": "44",
                    "Question": "Have you implemented policies and processes to ensure that post-termination of workforce personnel and/or expiration of external business relationships:\n- All assets containing Organisation data are returned?\n- All access is removed from systems containing Organisation data?"
                },
                {
                    "Question_No": "45",
                    "Question": "Are policies and procedures established and measures implemented to strictly limit access to Organisation data from portable and mobile devices (e.g., laptops, cell phones, and personal digital assistants (PDAs))? If yes, provide artefact to prove data accessed by portable devices cannot be exfiltrated (e.g., MDM solution)."
                }
            ]
        }
    ]
}
