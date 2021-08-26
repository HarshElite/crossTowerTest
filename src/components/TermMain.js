import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

function ControlledTabs() {
    const [key, setKey] = useState("termsofuse");
    return (
        <>
            {key === "termsofuse" ?
                <section className="section1-support">
                    <div class="row py-5">
                        <div class="col-md-12 col-12 py-5">
                            <p className="generic-title-para-blue mb-0 text-center">Legal</p>
                            <p className="generic-title-heading primary-color-blue-dark text-center">
                                Terms Of Use
                            </p>
                        </div>
                    </div>
                </section>
                :
                <></>}
                 {key === "privacypolicy" ?
                <section className="section1-support">
                    <div class="row py-5">
                        <div class="col-md-12 col-12 py-5">
                            <p className="generic-title-para-blue mb-0 text-center">Legal</p>
                            <p className="generic-title-heading primary-color-blue-dark text-center">
                                Privacy Policy
                            </p>
                        </div>
                    </div>
                </section>
                :
                <></>}



            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mt-3 mb-3 d-flex justify-content-around tab-color-top"
            >
                <Tab
                    className="customstylelink"
                    eventKey="termsofuse"
                    title="Terms Of Use"
                >
                    <div className="mt-5 px-md-5 px-3">
                        <p className="text-general-policy-title">Terms Of Use</p>
                        <p className="text-general-policy-para">

                            <strong>
                                1. Binding Agreement.
                            </strong>

                            <br />
                            This  binding Agreement (this “Agreement”) sets forth the legally binding terms and conditions your access to and use of any websites, mobile sites, mobile applications, desktop applications, products or services (the “Services”) offered by CrossTower India Trading Private Limited (“CrossTower”) to the extent further described as (“CrossTower”, “us”, “our”, and “we”) through access and use of websites/ portal/ mobile application, produced and/or maintained by us (“Site(s)”). The “User”, “you”, “your” shall refer to any natural person or entity and its authorized users that subscribes or uses the Services. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into this Agreement.
                            BY ACCESSING OR USING THE SERVICES, YOU ARE ACCEPTING THIS AGREEMENT (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT), AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THIS AGREEMENT (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT). YOU MAY NOT ACCESS OR USE THE SERVICES OR ACCEPT THIS AGREEMENT IF YOU ARE NOT AT LEAST 18 YEARS OLD. IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS OF THIS AGREEMENT, DO NOT ACCESS AND/OR USE THE SITE.
                            <br />
                            <br />
                            <strong>
                                2. This Agreement is Subject to Change.

                            </strong>
                            <br />
                            This Agreement is subject to modification by CrossTower at any time in CrossTower’s sole discretion and you will be bound by the latest version posted on the CrossTower Site(s). When we modify the website, we will endeavour to send you an email notifying you of any material change. It is important that you review the Agreement whenever it is modified because if you continue to use the Services after we have modified the Agreement, you are indicating to us that you agree to be bound by the modified Agreement. If you do not agree to be bound by the modified terms, you must stop using the Services. We may change or discontinue all or any part of the Services, at any time and without notice, at our sole discretion.
                            2.1. YOU ACKNOWLEDGE THAT TRADING IN CRYPTOCURRENCIES INVOLVES A HIGH DEGREE OF RISK. CRYPTOCURRENCIES ARE SUBJECT TO CONSTANT AND FREQUENT FLUCTUATIONS IN VALUE AND EXCHANGE RATES, AND THE VALUE OF YOUR CRYPTOCURRENCY ASSETS MAY INCREASE OR DECREASE AT ANY TIME. ACCORDINGLY, YOU MAY SUFFER A COMPLETE LOSS OF THE FUNDS HELD IN YOUR ACCOUNT. YOU ACKNOWLEDGE THAT YOU ARE SOLELY RESPONSIBLE FOR DETERMINING THE NATURE, SUITABILITY, AND APPROPRIATENESS OF THESE TRADING RISKS FOR YOU. YOU ACKNOWLEDGE AND AGREE THAT CROSSTOWER BEARS NO RESPONSIBILITY OR LIABILITY TO YOU OR ANY OTHER PERSON WHATSOEVER FOR ANY LOSSES OR GAINS INCURRED IN CONNECTION WITH YOUR USE OF THE SERVICES. YOU ALSO ACKNOWLEDGE AND AGREE THAT CROSSTOWER DOES NOT GIVE ADVICE OR RECOMMENDATIONS REGARDING THE TRADING OF CRYPTOCURRENCIES, INCLUDING THE SUITABILITY AND APPROPRIATENESS OF, AND INVESTMENT STRATEGIES FOR, CRYPTOCURRENCIES. YOU ALSO ACKNOWLEDGE AND AGREE THAT CROSSTOWER AND YOUR ABILITY TO USE THE SERVICES MAY BE DETRIMENTALLY IMPACTED BY REGULATORY ACTION OR CHANGES IN REGULATIONS APPLICABLE TO CRYPTOCURRENCY. YOU AGREE THAT WE MAY DISCLOSE YOUR PERSONAL AND ACCOUNT INFORMATION IF WE BELIEVE THAT IT IS REASONABLY NECESSARY TO COMPLY WITH A LAW, REGULATION, LEGAL PROCESS, OR GOVERNMENTAL REQUEST. YOU HEREBY ACKNOWLEDGE AND AGREE THAT CROSSTOWER IS NOT A FINANCIAL INSTITUTION, BANK, CREDIT UNION, TRUST, HEDGE FUND, BROKER OR INVESTMENT OR FINANCIAL ADVISOR, AND IS NOT SUBJECT TO THE SAME LAWS, REGULATIONS, DIRECTIVES OR REQUIREMENTS APPLICABLE TO SUCH PERSONS. YOU ACKNOWLEDGE AND AGREE THAT NO ORAL OR WRITTEN INFORMATION OR ADVICE PROVIDED BY CROSSTOWER, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, NOR ANY INFORMATION OBTAINED THROUGH THE SERVICES, WILL OR SHALL CONSTITUTE INVESTMENT, OR FINANCIAL ADVICE. YOU ARE SOLELY AND EXCLUSIVELY RESPONSIBLE FOR ALL TRADING DECISIONS MADE BY YOU WHILE USING THE SERVICES. CROSSTOWER IS MERELY A TECHNOLOGY PLATFORM AND YOU ARE SOLELY AND ENTIRELY RESPONSIBLE FOR THE LEGAL, REGULATORY AND TAX COMPLIANCE OF ALL TRANSACTIONS CARRIED OUT BY YOU USING THE SERVICES.
                            <br />
                            <br />
                            <strong>
                                3. Account Setup.

                            </strong>
                            <br />
                            3.1 Eligibility and Representations.
                            3.1.1 Eligibility Subject to Change
                            The eligibility requirements set forth herein may change from time to time and the use of certain CrossTower Services may require that CrossTower request additional information from you in order for you to continue your use of the CrossTower Services. The CrossTower Services are currently only available to individuals located in supported jurisdictions. For a complete list of currently supported jurisdictions, please contact CrossTower.
                            3.1.2 Natural Persons Registering
                            If you are registering to use the CrossTower Services as a natural person, you must be at least 18 years of age and must not have been previously suspended or removed from the CrossTower Services or any other service or product offered by CrossTower to enter into this Agreement.
                            3.1.3 Legal Entities Registering
                            If you are registering to use the CrossTower Services on behalf of a legal entity, you represent and warrant that (i) you are duly organized and validly existing under the laws of the jurisdiction of your organization or incorporation and, if relevant under such laws, in good standing; (ii) you have the power to execute this Agreement (and any other documentation relating to this Agreement to which you are a party), to deliver this Agreement and any other documentation relating to this Agreement that you are required by this Agreement to deliver and to perform your obligations under this Agreement, (iii) you have taken all necessary action to authorize such execution, delivery and performance under the Agreement; (iv) the execution, delivery and performance under this Agreement do not violate or conflict with any law applicable to you, any provision of your constitutional documents, any order or judgment of any court or other agency of government applicable to you or any of your assets or any contractual restriction binding on or affecting you or any of your assets; you have obtained all governmental and other consents that are required to have been obtained by you with respect to this User Agreement and such consents are in full force and effect and all conditions of any such consents have been complied with; and (v) your obligations under this Agreement constitute legal, valid and binding obligations, enforceable in accordance with their respective terms (subject to applicable bankruptcy, reorganization, insolvency, moratorium or similar laws affecting creditors’ rights generally and subject, as to enforceability, to equitable principles of general application (regardless of whether enforcement is sought in a proceeding in equity or at law)).
                            3.1.4 Additional Representations
                            Whether you are accessing or using the CrossTower Services as a natural person or legal entity, you further represent and warrant that you will not be using the CrossTower Services for any illegal activity, including, but not limited to, illegal gambling, money laundering, fraud, blackmail, extortion, ransoming data, terrorism financing, other violent activities, or any prohibited market practices.
                            3.1.5 Violations of Representations Means Immediate Termination
                            If CrossTower determines that you have violated this Agreement, including, but not limited to, transacting with blacklisted addresses, or engaging in Prohibited Use or Prohibited Business or Prohibited Transactions then CrossTower will have the right to terminate this User Agreement and you may forfeit any funds otherwise eligible for redemption. Notwithstanding the foregoing, CrossTower may determine not to make the CrossTower Services, in whole or in part, available in every market, either in its sole discretion or due to legal or regulatory requirements, depending on the User’s location. We may without liability to you or any third-party refuse to let you register an account at CrossTower or we may revoke your rights to your CrossTower Account.
                            3.2 Identity Verification
                            During registration for your CrossTower account, you agree to provide CrossTower at any time during the term of this Agreement with the information we request as soon as practicable for the purposes of identity verification and the detection of money laundering, terrorist financing, fraud, or any other financial crimes. You also agree to permit us to keep records of such information. We will need to complete certain verification procedures before you are permitted to use the CrossTower Service, which will require that your personal information be screened against various reporting agency databases. CrossTower may change your access to CrossTower Services at any time and from time to time in our sole discretion based upon information that we obtain about you. The information we request may include certain personal information, including, but not limited to, your name, physical address, mailing address, telephone number, e-mail address, date of birth, POI (PAN Number), government identification including POA (Aadhar details/ Driving Licence/ Voter Id/ Passport) , and, depending on your account type, information regarding your bank account (such as the name of the bank, the account type, IFSC code, cancelled cheque/ bank statement and account number) and, where permitted by law, special categories of personal data, such as biometric information. Any information that you provide to us you hereby agree that such information is complete, true and accurate and is not misleading, and you agree that you will promptly provide updated information if any information changes by contacting CrossTower at support@crosstower.in. You authorize us to make inquiries, whether directly or through third parties, that we consider necessary to verify your identity or protect you and/or us against fraud or other financial crime, and to take action we reasonably deem necessary based on the results of such inquiries. We reserve the right to maintain your personal information after you terminate the Agreement for business and regulatory compliance purposes, subject to Applicable Laws and regulation. For example, we may be subject to various regulations which, in a number of jurisdictions, require us to retain certain personal data for a minimum period of seven (7) years after the termination of this Agreement.
                            3.3 Acting on Your Behalf and No Third Party
                            To use the CrossTower Services, you must register for a CrossTower account (a “CrossTower Account“). By using a CrossTower Account you agree and represent that you will use CrossTower only for yourself, and not on behalf of any third party, unless you have obtained prior approval from CrossTower. You are fully responsible for all activity that occurs under your CrossTower Account. We may, in our sole discretion, refuse to open a CrossTower Account, or limit the number of CrossTower Accounts that you may hold or suspend or terminate any CrossTower Account or the trading of specific Cryptocurrency in your account.
                            3.4 Your Personal Information
                            All personal information provided under this form will be used, distributed, and maintained in accordance with CrossTower’s Privacy Policy (“CrossTower Privacy Policy”).
                            3.4.1 No Investment Advice or Brokerage. For the avoidance of doubt, CrossTower does not provide investment, tax, or legal advice, nor does CrossTower broker trades on your behalf. All CrossTower trades are executed automatically, based on the parameters of your order instructions and in accordance with posted trade execution procedures, and you are solely responsible for determining whether any investment, investment strategy or related transaction is appropriate for you based on your personal investment objectives, financial circumstances and risk tolerance. You should consult your legal or tax professional regarding your specific situation.
                            3.4.2 Educational Materials. CrossTower may provide educational materials from time to time in order to assist users in learning more about such Cryptocurrencies. Information may include, but is not limited to, blog posts, articles, links to third-party content, news feeds, tutorials, and videos. The information provided does not constitute investment advice, financial advice, trading advice, or any other sort of advice, and you should not treat any of the content as such. CrossTower does not recommend that any Cryptocurrency should be bought, earned, sold, or held by you. Before making the decision to buy, sell or hold any Cryptocurrency, you should conduct your own due diligence and consult your financial advisors before making any investment decision. CrossTower will not be held responsible, and you acknowledge you are solely responsible for the decisions you make to buy, sell, or hold Cryptocurrencies.
                            3.5. CrossTower Account Opening
                            3.5.1 How to Open an Account
                            Indian residents can open an account on CrossTower at https://www.crosstower.in/ Users must then enter their email and set their passwords. Please note that the password must be 8-255 characters long and contain at least one number, uppercase letter, lowercase letter and special characters.
                            3.5.2 Communication by Email
                            All communications by CrossTower to you are by email. We will use the email address on record for your CrossTower Account as our primary means of communicating with you. To ensure that you receive all of our communications, you agree to keep your email address up-to-date and immediately notify us if there are any changes. Delivery of any communication to the email address on record is considered effective. If any email communication is returned as undeliverable, we retain the right to block your access to CrossTower until you provide and confirm a new and valid email address.
                            3.5.3 Equipment Required for Access
                            To access the CrossTower Services, you must have the necessary equipment (such as a smartphone or laptop) and the associated telecommunication service subscriptions to access the Internet. The CrossTower Services can be accessed directly using the CrossTower Sites.
                            3.5.4 Cryptocurrency Wallet
                            3.5.4.1 General
                            Upon verification of your identity, you will have the ability to transfer, track and store supported Cryptocurrencies by giving instructions through the CrossTower Site/ mobile application (each such transaction, a “Cryptocurrency Transaction”) in connection with your Cryptocurrency wallet (the “Cryptocurrency Wallet”).
                            3.5.4.2 CrossTower May Refuse to Process or Cancel Transactions
                            CrossTower reserves the right to refuse to process or to cancel any pending Cryptocurrency Transaction in its discretion, which may be due to compliance with laws and regulations or in response to a court order, other government order or to enforce transaction limits or for risk management purposes. CrossTower cannot reverse a Cryptocurrency Transaction which has been broadcast to a Cryptocurrency network. The Cryptocurrency Wallet services are available only in connection with those Cryptocurrency that CrossTower, in its sole discretion, decides to support. The Cryptocurrency that CrossTower supports may change from time to time without notice to you. Please see for a list of Cryptocurrencies that CrossTower supports on CrossTower’s Market Specifications page at: https://crosstower.in/legal#market-data-terms/
                            3.5.4.3 Use Only Supported Cryptocurrency
                            Under no circumstances should you attempt to use your Cryptocurrency Wallet services to transfer or store Cryptocurrencies in any form that is not supported by CrossTower. CrossTower assumes no responsibility or liability in connection with any attempt to use CrossTower Services for Cryptocurrency that CrossTower does not support.
                            3.5.4.4 You are Liable for Your Errors
                            You assume full responsibility and liability for any loss resulting from intentional or unintentional misuse of your Cryptocurrency  Wallet services, including, without limitation, any loss resulting from (i) depositing one type of Cryptocurrency  to a wallet intended for another type of Cryptocurrency , regardless of whether the relevant Cryptocurrency  network confirms the applicable Cryptocurrency  Transaction; (ii) depositing a Cryptocurrency  into an address that you did not intend; (iii) inserting incorrect transaction information into the CrossTower Site. CrossTower assumes no responsibility or liability in connection with any of the foregoing.

                            3.5.4.5 WE ARE NOT A BANK OR FINANCIAL INSTITUTION
                            YOUR CROSSTOWER ACCOUNT AND ANY OTHER ACCOUNT YOU MAY HAVE WITH US (AND ANY CRYPTOCURRENCY HELD IN SUCH ACCOUNT) IS NOT A BANK ACCOUNT OR A DEPOSIT ACCOUNT. NO INTEREST WILL BE PAID ON ANY Cryptocurrencies YOU USE TO PURCHASE OR TRADE FOR ANY OTHER CRYPTOCURRENCY WITH OTHER USERS, AND ALL CRYPTOCURRENCY DIRECTLY HELD BY US ARE NOT INSURED BY US OR ANY GOVERNMENT AGENCY. PLEASE NOTE, THE ACCOUNT IS NOT INSURED. YOU ARE POTENTIALLY SUBJECT TO THE CREDIT RISK OF CROSSTOWER.
                            3.5.4.6 Cryptocurrency Transactions
                            For any supported Cryptocurrency on our trading platform, CrossTower processes transactions according to the instructions received from its users and we do not guarantee the identity of any receiver of Cryptocurrency. You should verify all transaction information prior to submitting instructions to CrossTower. Some people transfer small amounts from one account to another to confirm that they have the correct address. A Cryptocurrency Transaction will be unconfirmed for a period of time pending sufficient confirmation of the transaction by the Cryptocurrency network. A transaction is not complete while it is in a pending state. Cryptocurrencies associated with transactions that are in a pending state will be designated accordingly and will not be included in your CrossTower Account balance or be available to conduct transactions. CrossTower may charge fees to process a Cryptocurrency Transaction on your behalf. You acknowledge that you will be responsible for paying any such fees out of your available proceeds. CrossTower reserves the right to delay or cancel any Cryptocurrency Transaction if it perceives a risk of fraud or illegal activity, or otherwise within its discretion if we determine it is important for risk management. WE ARE NOT RESPONSIBLE FOR ANY DISPUTES AMONG OR BETWEEN USERS REGARDING ANY TRANSACTION. WE DO NOT GUARANTEE THAT ANY ORDER YOU PLACE WILL BE FILLED. YOU HEREBY ACKNOWLEDGE AND AGREE THAT ONCE AN ORDER HAS BEEN EXECUTED, THE TRANSACTION IS LIKELY NOT TO BE REVERSIBLE UNLESS AS APPLICABLE BY LAW.
                            3.6 Cryptocurrency Storage & Transmission Delays
                            CrossTower securely stores all Cryptocurrency private keys in our control in a combination of online and offline storage. As a result, it may be necessary for CrossTower to retrieve certain information from offline storage in order to facilitate a Cryptocurrency Transaction in accordance with your instructions, which may delay the initiation or crediting of such Cryptocurrency Transaction for a period of time, which period of time may be significant. You acknowledge and agree that a Cryptocurrency Transaction facilitated by CrossTower may be delayed for this reason.
                            3.7 Airdrops
                            You understand, acknowledge and agree that in the event that a third party or software protocol attempts to or does distribute a Cryptocurrency, whether or not supported by CrossTower (often known as an “airdrop” or “bootstrap”) to certain wallet addresses, we will treat such airdropped Cryptocurrency as we would treat any other unsupported Cryptocurrency. You agree and understand that airdropped Cryptocurrencies do not create a relationship between us and the transferor, sender and/or the related network that created the airdropped Cryptocurrency, and further, that we are not subject to any obligation as it may relate to the transferor, sender or related network.
                            3.8 Supplemental Protocols Excluded
                            Unless specifically announced on the CrossTower Site or other official public statement of CrossTower, Cryptocurrencies excludes all other protocols and/or functionality which supplement or interact with such Cryptocurrencies. This exclusion includes but is not limited to coloured coins, meta coins, side chains, or other derivative, enhanced, or forked protocols, tokens, or coins or other functionality, such as staking, protocol governance, and/or any smart contract functionality, which may supplement or interact with a Cryptocurrency that we support. If a Cryptocurrency is not supported, you may lose the asset with no opportunity to restore or regain such asset. Do not use your CrossTower Account to attempt to request, receive, send, store, or engage in any other type of transaction or functionality involving any such protocol as CrossTower is not configured to detect, secure, or process these transactions and functionality. Any attempted transactions in such items will result in loss of the item. You acknowledge and agree that supplemental protocols are excluded from every Cryptocurrency and that CrossTower has no liability for any losses related to supplemental protocols.
                            3.9 Operation of Cryptocurrency Protocols
                            CrossTower does not own or control any underlying software protocols which govern the operation of Cryptocurrency supported on our platform. In general, the underlying protocols are open source, and anyone can use, copy, modify, and distribute them. By using the CrossTower Services, you acknowledge and agree (i) that CrossTower is not responsible for operation of the underlying protocols and that CrossTower makes no guarantee of their functionality, security, or availability; and (ii) that the underlying protocols are subject to sudden changes in operating rules (a/k/a “forks”), and that such forks may materially affect the value, function, and/or even the name of the Cryptocurrency you store in the CrossTower platform. In the event of a fork, you agree that CrossTower may suspend CrossTower operations (with or without advance notice to you) and that CrossTower may, in its sole discretion, decide whether or not to support (or cease supporting) either branch of the forked protocol entirely. You acknowledge and agree that CrossTower assumes no responsibility in respect of an unsupported branch of a forked protocol.
                            3.10 Attacks and Other Malicious Activities
                            CrossTower does not have any ability to prevent or mitigate attacks on any Cryptocurrency or their underlying protocols and networks. CrossTower reserves the right to take any actions in the event of an attack, as determined in its sole discretion, including but not limited to: (i) if CrossTower reasonably believes that a Cryptocurrency  that it supports has been or may be compromised, or is or will be under attack, CrossTower may immediately halt trading, deposits, and withdrawals for such Cryptocurrency ; and (ii) if it is determined that such an attack caused the Cryptocurrency  to greatly decrease in value, CrossTower may discontinue trade activity on such Cryptocurrency  partially or entirely. CrossTower does not have any obligation to engage in any activities in relation to attacks on any Cryptocurrency or their underlying protocols and networks. Resolutions for an attacked Cryptocurrency will be determined on a case-by-case basis by CrossTower in its sole discretion. CROSSTOWER MAKES NO REPRESENTATION AND DOES NOT WARRANT THE SAFETY OF THE CROSSTOWER SERVICES AND IS NOT LIABLE FOR ANY LOST VALUE OR STOLEN PROPERTY, WHETHER OR NOT CROSSTOWER WAS NEGLIGENT IN PROVIDING THE PROPER SECURITY.
                            3.11 Ownership
                            The Title to each Cryptocurrency shall at all times remain with you and shall not transfer to CrossTower. As the owner of Cryptocurrency in your Digital Wallet, you shall bear all risk of loss of such Cryptocurrency. CrossTower shall have no liability for Cryptocurrency fluctuations. None of the Cryptocurrency  in your Cryptocurrency Wallet are the property of, or shall or may be loaned to, CrossTower. CrossTower does not represent or treat assets in User’s Wallets as belonging to CrossTower. You acknowledge and agree that CrossTower may grant a security interest in the Cryptocurrencies held in your Cryptocurrency Wallet. By using CrossTower’s services and platforms, you hereby grant CrossTower the right to pledge, repledge, to sell, transfer, loan, rehypothecate, hypothecate, or otherwise alienate Cryptocurrencies in your Cryptocurrency Wallet without prior notice to you. Notwithstanding the foregoing, you acknowledge and agree that in the event that there are outstanding amounts owed to us hereunder, including in your CrossTower Account, CrossTower reserves the right to debit your CrossTower Account and/or to withhold amounts from funds you may transfer into such CrossTower Account.
                            3.11.1 Control
                            You are always in control of the Cryptocurrencies held in your CrossTower Account. However, Cryptocurrencies held in your CrossTower account are protected by private keys which CrossTower manages on your behalf. You may withdraw your Cryptocurrencies at any time to separate blockchain wallets which you control that are not hosted or maintained by CrossTower.
                            3.11.2 Acknowledgement of Risk
                            You accept and understand that Cryptocurrencies in your CrossTower account do not qualify for insurance.
                            3.12 Cryptocurrencies Not Segregated
                            CrossTower may hold your Cryptocurrencies in shared blockchain addresses.
                            3.13 Downtime and Maintenance
                            CrossTower may have scheduled and unscheduled maintenance. You agree and understand that part of or all of CrossTower may be periodically unavailable during such times (collectively, “Downtime”). You acknowledge and agree that CrossTower is not responsible or liable during periods of Downtime. During such periods of Downtime, the prices of various Cryptocurrencies may move, which means that you may gain or lose value in your Cryptocurrency Account. CrossTower is not responsible for those gains or losses resulting from the Downtime.
                            3.14 Fees
                            CrossTower may earn fees when you purchase or sell Cryptocurrencies on our platform. These fees are subject to change at any time. CrossTower makes no representations or warranties as to the consistency of its published fee structure. CrossTower reserves the right to enter into and negotiate different fee structures with users on an individual and independent basis. You agree to pay all applicable fees when you are using the CrossTower platform. For complete details visit:
                            <br />
                            <br />
                            <strong>
                                4. General Use, Prohibited and Termination.
                            </strong>
                            <br />

                            4.1 License
                            We grant you a limited, nonexclusive, non-transferable, revocable license, subject to the terms of this Agreement, to access and use the CrossTower Site(s) and our related materials (together, the “Content”) only for approved purposes as permitted by CrossTower from time to time. Any other use of the Content is expressly prohibited. CrossTower retains any and all other rights, title, and interest in the Content. No part of the Content may be copied, photocopied, reproduced, translated, or reduced to any electronic medium or machine-readable form, in whole or in part, without prior written consent of CrossTower. Any other reproduction in any form without the permission of CrossTower is prohibited. All materials contained on this site are protected by Indian copyright law and may not be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior written permission of CrossTower. By using the Site(s), you hereby agree you will not copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, create derivative works from, or in any other way exploit any of the Content, in whole or in part. “CrossTower” and all logos related to the CrossTower Services or displayed on the CrossTower Sites are either trademarks or registered marks of CrossTower or its licensors. You may not copy, imitate, or use our logs without CrossTower’s prior written consent.
                            4.2 Site Accuracy
                            Although we intend to provide accurate and timely information on the CrossTower Site(s), the CrossTower Site(s) (including, without limitation, the Content) may not always be accurate, complete, or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may be changed or updated from time to time without notice, including without limitation information regarding our policies, products and services. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on the CrossTower Site(s) are your sole responsibility and we shall have no liability for such decisions. Information provided by third parties, including historical price and supply data for Cryptocurrencies, is for informational purposes only and CrossTower makes no representations or warranties to its accuracy. Links to third-party materials (including without limitation websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third-party sites accessible or linked to the CrossTower Sites. If you need specific details about any information contained in CrossTower Sites, you should contact us at support@crosstower.in.
                            4.3 Prohibited Use
                            In connection with your use of the CrossTower Services, and your interactions with other users, and third parties you agree and represent, you will not engage in any Prohibited Business or Prohibited Use, as defined under Appendix 1. We reserve the right at all times to monitor, review, retain and/or disclose any information provided by you as necessary to satisfy any Applicable Law, regulation, sanctions programs, legal process, governmental request or in our process of risk management. We may cancel and/or suspend your CrossTower Account and/or block transactions or freeze funds immediately and without notice to you if we determine, in our sole discretion, that your CrossTower Account is associated with a Prohibited Use and/or a Prohibited Business or if we determine that you have violated any Applicable Law, regulation, sanctions programs, legal process, CrossTower risk management threshold, as determined by CrossTower in its sole discretion, or pursuant to a governmental request.
                            4.4 Third Party Applications
                            If, to the extent permitted by CrossTower from time to time, you grant express permission to a third party to access or connect to your CrossTower Account, you will notify CrossTower at support@crosstower.in. We will grant you express written permission to have such third-party access or to connect to your CrossTower Account based upon our internal procedures. You are not to allow a third party without this permission. You acknowledge that granting permission to a third party to take specific actions on your behalf does not relieve you of any of your responsibilities under this Agreement. You are fully responsible for all acts or omissions of any third party with access to your CrossTower Account. Further, you acknowledge and agree that you will not hold CrossTower responsible for, and will indemnify CrossTower from, any liability arising out of or related to any act or omission of any third party with access to your CrossTower Account.
                            4.5 Transaction Limits
                            The use of all CrossTower Services is subject to a limit on the amount you may withdraw in a given period (e.g., daily, weekly and monthly). Your transaction limits may vary depending on your identity verification level and other factors. CrossTower reserves the right to change applicable limits as we deem necessary in our sole discretion. If you wish to raise your limits beyond the posted amounts, you may contact us at support@crosstower.in. We may require you to submit additional information about yourself or your business, provide records, and arrange for meetings with CrossTower staff (such process, “Enhanced Due Diligence”). CrossTower reserves the right to charge you costs and fees associated with Enhanced Due Diligence, if we notify you in advance of any such charges accruing. In our sole discretion, we may refuse to raise your limits, or we may lower your limits at a subsequent time even if you have completed Enhanced Due Diligence.
                            4.6 Termination and Cancellation
                            You agree and understand that we have the right to immediately (i) suspend your account and all accounts beneficially owned by you and any members of your household or for which you are a representative or authorized signatory and, in the case of entities, any affiliates (each, a “Related Account”), (ii) freeze/lock the funds and assets in all such accounts, and (iii) suspend your access to the CrossTower Site(s)until a determination has been made, if we suspect, in our sole discretion, you and/or any such accounts to be in violation of:-

                            (a) any provision of this Agreement.
                            (b) any Applicable Laws.
                            (c) our Anti-Money Laundering Program (“AML Program”).
                            (d) our Prohibited Business or Prohibited Use policies; or
                            (e) CrossTower’s risk management policies, as determined by CrossTower in its sole discretion, which internal policies are subject to change from time to time.
                            You further agree and understand that we have the right to immediately (i) suspend your account and any Related Account, (ii) freeze/lock the funds and assets in all such accounts, and (iii) suspend your access to CrossTower until a determination has been made, if:
                            (a) The account has a negative balance for any reason.
                            (b) We reason to believe there is unusual activity in the account.
                            (c) We are so required by a court order, or binding order of a government authority.
                            (d) We believe someone is attempting to gain unauthorized access to your CrossTower Account.
                            (e) The account has a balance that needs to be reconciled for any reason.
                            (g) We believe you are using CrossTower, your login credentials, or other account information in an unauthorized or inappropriate manner; or
                            (h) For any reason that in our sole discretion is necessary to manage the risk to CrossTower.
                            If your account has been suspended, you will be notified when accessing CrossTower. We may, in our sole discretion, give written notice that your account has been suspended and may, in our sole discretion, disclose the reasons for suspension, if permitted to do so by law.
                            4.7 Receipt of Wrong Information
                            If you receive information about another user through the CrossTower Services, you may not disclose or distribute a user’s information to a third party. You may not use the information except as reasonably necessary to effectuate a transaction and other functions reasonably incidental thereto (such as support, reconciliation, and accounting) without the user’s express consent to do so. You may not send unsolicited email to a user through the CrossTower Services. If you believe that you have received such information in error, please notify CrossTower immediately at support@crosstower.in. Please delete information that you receive in error after notifying CrossTower.
                            4.8 Death of Account Holder
                            Closing an account after a death can feel daunting, but CrossTower will do our best to make the process as simple as we can. For security reasons, if we receive legal documentation confirming your death or other information leading CrossTower to believe you have died, we will freeze your CrossTower Account. After such time, no transactions may be completed until:(i) your legal successor has opened (pursuant to our typical on-boarding process) and transferred your assets to a new CrossTower Account, or (ii) CrossTower has received proof in a form satisfactory to us that your death was an error. If we have reason to believe you may have died but we do not have proof of your death in a form satisfactory to us, you authorize us to make inquiries, whether directly or through third parties, that we consider necessary to ascertain whether you have died. By acknowledging this Agreement, you are hereby providing written consent for us to conduct this query. If CrossTower determines that there is uncertainty with respect to your legal successor, CrossTower reserves the right to require an order resolving such issue from a court of competent jurisdiction before taking any action relating to your CrossTower Account.


                            4.9 Unclaimed Property
                            If CrossTower is holding funds in your account, and CrossTower is unable to contact you and has no record of your use of the Services for several years, applicable state law may require CrossTower to report these funds as unclaimed property to the applicable jurisdiction. If this occurs, CrossTower will try to locate you at the address shown in our records, but if CrossTower is unable to locate you, it may be required to deliver any such funds to the applicable state or jurisdiction as unclaimed property.
                            <br />
                            <br />
                            <strong>
                                5. Contact CrossTower
                            </strong>
                            <br />
                            If you have any questions, feedback, or complaints, notify CrossTower at support@crosstower.in. When you contact us, please provide us with your name, address, and any other information we may need to identify you, your CrossTower Account, and the transaction on which you have feedback, questions, or complaints.
                            <br />
                            <br />
                            <strong>
                                6. Governing Law; Submission to Jurisdiction; Arbitration

                            </strong>
                            <br />
                            If you have a dispute with CrossTower, we will attempt to resolve any such disputes through our support team. If we cannot resolve the dispute through our support team, you and we agree that any controversy, claim, or dispute arising out of or relating to this Agreement shall be settled SOLELY AND EXCLUSIVELY BY BINDING ARBITRATION, on an individual basis.
                            This Agreement shall be governed by the laws of India. Any dispute arising out of or in connection with this Agreement, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by arbitration in Gurugram, India in accordance with the provisions of the Arbitration and Conciliation Act, 1996, as amended, by a sole arbitrator mutually appointed by the parties.  The language of the arbitration shall be English.  The award shall be final and binding on both parties.  Where reference to the courts is necessary, the parties hereby submit to the exclusive jurisdiction of the courts of Gurugram. You irrevocably and unconditionally waive any objection that it you now or hereafter have to the laying of venue of any action or proceeding arising out of or relating to this Agreement in the courts referred to in this Section.
                            <br />
                            <br />
                            <strong>
                                7. Security and Data Privacy
                            </strong>
                            <br />
                            7.1 Personal Data
                            You acknowledge that we may process personal data in relation to you (if you are an individual), and personal data that you have provided or in the future provide to us in relation to your employees and other associated or other individuals, in connection with this Agreement, or the CrossTower Services. Accordingly, you represent and warrant that: (i) your disclosure to us of any personal data relating to individuals other than yourself was or will be made in accordance with all applicable data protection and data privacy laws, and those data are accurate, up to date and relevant when disclosed; (ii) before providing any such personal data to us, you have read and understood our Privacy Policy, which is available at https:/crosstower.in/privacy-policy, and, in the case of personal data relating to an individual other than yourself, have (or will at the time of disclosure have) provided a copy of that Privacy Policy (as amended from time to time), to that individual; and (iii) if from time to time we provide you with a replacement version of the Privacy Policy you will promptly read that notice and provide a copy to any individual whose personal data you have provided to us.
                            7.2 Security Breach
                            If you suspect that your CrossTower Account or any of your security details have been compromised or if you become aware of any fraud or attempted fraud or any other security incident (including a cyber-security attack) affecting you and/or CrossTower (together a “Security Breach “), you must notify CrossTower support as soon as possible at support@crosstower.in. You must take any steps that we require to reduce, manage, or report any Security Breach. Failure to provide prompt notification of any Security Breach may be taken into account in our determination of the appropriate resolution of the matter.
                            7.3 Account Security
                            You understand and agree that you are responsible for the security on our system. We urge you to consider maintaining security on your system, platform, or device. We may institute any of the below as required. Ways in which to do that are as follows (which are suggestions and not advice):
                            – Secure the email account that you are using for the CrossTower platform via software token or hardware token
                            – Generate a completely unique password to the CrossTower platform that has never been used on any other online service
                            – Enable two factor authentication via a software token or hardware token
                            – Whitelist addresses that you can verifiably withdraw to
                            – You have the ability to terminate all logged-in sessions across all devices
                            7.4 Computer Viruses
                            We shall not bear any liability, whatsoever, for any damage or interruptions caused by any spyware, scareware computer viruses, Trojan horses, worms, or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software. You should also be aware that SMS and email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from CrossTower. Always log into your CrossTower Account through the CrossTower Site(s)to review any transactions or required actions if you have any uncertainty regarding the authenticity of any communication or notice.
                            <br />
                            <br />
                            <strong>
                                8. General Terms

                            </strong>
                            <br />
                            8.1 Limitation of Liability; No Warranty; Class Action Waiver
                            IN NO EVENT SHALL CROSSTOWER OR ITS OFFICERS, DIRECTORS, AGENTS, EMPLOYEES, CONSULTANTS, REPRESENTATIVES, INTERNAL OPERATING UNITS, AFFILIATES, PARENTS, SUBSIDIARIES, SUBLICENSEES, SUCCESSORS AND ASSIGNS, INDEPENDENT CONTRACTORS, AND RELATED PARTIES (COLLECTIVELY, WITH CROSSTOWER, THE “CROSSTOWER ENTITIES”) BE LIABLE TO YOU OR ANY THIRD-PARTY FOR ANY CONSEQUENTIAL, INDIRECT, INCIDENTAL, PUNITIVE, EXEMPLARY OR SPECIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OF USE, THE USE OR INABILITY TO USE THE WEBSITE, SERVICES, OR CONTENT, ANY BREACH OF SECURITY, OR ANY CONTENT, INFORMATION, PRODUCTS OR SERVICES OBTAINED THROUGH THE SERVICES, INCLUDING ANY LOSS OF REVENUE OR PROFITS, LOSS OF USE, LOSS OF DATA, OR BUSINESS INTERRUPTION, WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY, REGULATION, COMMON LAW PRECEDENT OR OTHER LEGAL THEORY, EVEN IF THE CROSSTOWER ENTITIES HAVE BEEN ADVISED OF THE POSSIBILITY OF DAMAGES AND EVEN IF SUCH DAMAGES RESULT FROM ANY CROSSTOWER ENTITY’S NEGLIGENCE OR GROSS NEGLIGENCE. ADDITIONAL DISCLAIMERS BY CROSSTOWER MAY APPEAR WITHIN THE SERVICES AND ARE INCORPORATED HEREIN BY REFERENCE. TO THE EXTENT ANY SUCH DISCLAIMERS PLACE GREATER RESTRICTIONS ON YOUR USE OF THE SERVICES OR THE MATERIAL CONTAINED THEREIN, SUCH GREATER RESTRICTIONS SHALL APPLY. SOME JURISDICTIONS RESTRICT OR DO NOT ALLOW THE LIMITATION OF LIABILITY IN CONTRACTS, AND AS A RESULT OF THE CONTENTS OF THIS SECTION, MAY NOT APPLY TO YOU. IN CASES WHERE SUCH LAWS APPLY., LIABILITY OF THE CROSSTOWER ENTITIES SHALL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW. NOTWITHSTANDING THE FOREGOING, NOTHING SHALL IMPACT YOUR OWNERSHIP RIGHTS TO YOUR CRYPTOCURRENCY. THE CROSSTOWER SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY REPRESENTATION OR WARRANTY, WHETHER EXPRESS, IMPLIED OR STATUTORY. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CROSSTOWER SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND/OR NON-INFRINGEMENT. CROSSTOWER DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES THAT ACCESS TO THE SITES, ANY PART OF THE CROSSTOWER SERVICES, OR ANY OF THE MATERIALS CONTAINED THEREIN, WILL BE CONTINUOUS, UNINTERRUPTED, TIMELY, OR ERROR-FREE. CROSSTOWER DOES NOT GUARANTEE THAT ANY ORDER WILL BE EXECUTED, ACCEPTED, RECORDED OR REMAIN OPEN. EXCEPT FOR THE EXPRESS STATEMENTS SET FORTH IN THIS AGREEMENT, YOU HEREBY ACKNOWLEDGE AND AGREE THAT YOU HAVE NOT RELIED UPON ANY OTHER STATEMENT OR UNDERSTANDING, WHETHER WRITTEN OR ORAL, WITH RESPECT TO YOUR USE AND ACCESS OF THE CROSSTOWER SERVICES AND CROSSTOWER SITES. WITHOUT LIMITING THE FOREGOING, YOU HEREBY UNDERSTAND AND AGREE THAT CROSSTOWER WILL NOT BE LIABLE FOR ANY LOSSES OR DAMAGES ARISING OUT OF OR RELATING TO: (A) ANY INACCURACY, DEFECT OR OMISSION OF CRYPTOCURRENCY PRICE DATA, (B) ANY ERROR OR DELAY IN THE TRANSMISSION OF SUCH DATA, OR (C) INTERRUPTION IN ANY SUCH DATA. CrossTower makes no guarantees regarding the accuracy, timeliness, or completeness of the historical price data regarding supported Cryptocurrencies available on the CrossTower Sites.
                            8.2 Indemnification
                            You agree to indemnify and hold CrossTower, its affiliates and service providers, and each of its or their respective officers, directors, agents, joint venturers, employees, consultants and representatives (collectively, the “Indemnified Parties”), harmless from any claim or demand (including attorneys’ fees and any fines, fees or penalties imposed by any regulatory authority) arising out of or related to (i) your use, misuse, or inability to use the CrossTower Site(s) or the CrossTower Services; (ii) your breach of this User Agreement, or (iii) your violation of any law, rule or regulation, or the rights of any third party. To the maximum extent permitted by Applicable Law, you hereby discharge, acquit, and otherwise release the Indemnified Parties, from any claim or demand (including attorneys’ fees and any fines, fees or penalties imposed by any regulatory authority) arising out of or related to the use of the CrossTower Sites, and the CrossTower Services, including, but not limited to, claims relating to the following: negligence, gross negligence, intentional interference with contract or advantageous business relationship, defamation, privacy, publicity, misrepresentation, any financial loss not due to the fault of CrossTower, the CrossTower Site, false identities, fraudulent acts by others, invasion of privacy, release or misuse of personal information, disputes with other users of the CrossTower Services, failed transactions, purchases or functionality of the CrossTower Sites, unavailability of the CrossTower Sites, its functions and/or the CrossTower Services and any other technical failure that may result in inaccessibility to the CrossTower Sites, or the CrossTower Services, or any claim based on vicarious liability for torts committed by users encountered or transacted with or through the CrossTower Sites, or the CrossTower Services, including, but not limited to, fraud, computer hacking, theft or misuse of personal information, assault, battery, stalking, rape, cheating, perjury, manslaughter, or murder. The above list is intended to be illustrative only, and not exhaustive of the types or categories of claims released by you. This release is intended by the parties to be interpreted broadly in favour of CrossTower, and thus any ambiguity shall be interpreted in a manner providing release of the broadest claims. This release is intended to be a full release of claims, and the parties acknowledge the legally binding nature of this provision, and the nature of the rights given up in connection therewith.
                            8.3 Acknowledge and Agreement to Operational Challenges
                            You are aware of and accept the risk of operational challenges. CrossTower may experience sophisticated cyber-attacks, unexpected surges in activity or other operational or technical difficulties that may cause interruptions to the CrossTower Services. You understand that the CrossTower Services may experience operational issues that lead to delays, including delays redeeming Cryptocurrencies. You agree to accept the risk of transaction failure resulting from unanticipated or heightened technical difficulties, including those resulting from sophisticated attacks. You agree not to hold CrossTower accountable for any related losses.
                            8.4 Third-Party Products and Services
                            You acknowledge that CrossTower will provide you a platform to allow or assist you to access, interact with, and/or acquire or purchase products and/ or services from several supported platforms and other third parties via third-party websites or applications (collectively, “Third-Party Products and Services”). CrossTower is not responsible for such Third-Party Products and Services and CrossTower does not monitor, warrant, endorse or make any representations with respect to Third-Party Products and Services. Any use of Third-Party Products and Services is regulated solely by the terms and conditions of such Third-Party Products and Services. Any contract entered into, or any transaction completed via any Third-Party Products and Services, is only between you and the relevant third party and not CrossTower. In the event, any Third-Party Products and Services discontinue their programs available to CrossTower and/or such Third-Party Products and Services cease to exist, CrossTower shall not be liable for the consequences of the same and may cease to provide such features to you without entitling you to refund, credit or other compensation. You agree to not hold CrossTower liable for any losses related to Third-Party Products and Services.
                            <br />
                            <br />
                            <strong>
                                9. Miscellaneous

                            </strong>
                            <br />
                            9.1 Entire Agreement
                            This Agreement is the complete and exclusive agreement between the parties with respect to the subject matter hereof, superseding and replacing all prior agreements, communications, and understandings (both written and oral) regarding such subject matter.
                            9.2 Force Majeure
                            In no event will we be liable or responsible to you, or be deemed to have defaulted under or breached this Agreement, for any failure or delay in fulfilling or performing any term of this Agreement, when and to the extent such failure or delay is caused by any circumstances beyond such party’s reasonable control (a “Force Majeure Event”), including acts of God, flood, fire, earthquake or explosion, war, terrorism, pandemic, invasion, riot or other civil unrest, embargoes or blockades in effect on or after the date of this Agreement, national or regional emergency, strikes, labour stoppages or slowdowns or other industrial disturbances, passage of law or any action taken by a governmental or public authority, including imposing an embargo, export or import restriction, quota, or other restriction or prohibition or any complete or partial government shutdown, or national or regional shortage of adequate power or telecommunications or transportation.
                            9.3 Headings
                            The headings in this User Agreement are for reference only and do not affect the interpretation of this User Agreement.
                            9.4 Assignment
                            You may not assign any rights and/or licenses granted under this Agreement. We reserve the right to assign our rights without restriction, including without limitation to any CrossTower affiliates or subsidiaries, or to any successor in interest of any business associated with the CrossTower Services. In the event that CrossTower is acquired by or merged with a third-party entity, we reserve the right, in any of these circumstances, to transfer or assign the information we have collected from you as part of such merger, acquisition, sale, or other change of control in accordance with Applicable Law. Any attempted transfer or assignment in violation hereof shall be null and void. Subject to the foregoing, this Agreement will bind and insure to the benefit of the parties, their successors and permitted assigns.
                            9.5 Survival
                            All provisions of this Agreement which by their nature extend beyond the expiration or termination of this Agreement, including, without limitation, sections pertaining to suspension or termination, CrossTower Account cancellation, debts owed to CrossTower, general use of the CrossTower Sites, disputes with CrossTower, indemnity and general provisions, shall survive the termination or expiration of this Agreement.
                            9.6 Waiver
                            Our failure or delay in exercising any right, power or privilege under this Agreement shall not operate as a waiver thereof.
                            9.7 Severability
                            If any term or provision of this Agreement is held invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other term or provision of this Agreement or invalidate or render unenforceable such term or provision in any other jurisdiction. Upon such determination that any term or other provision is invalid, illegal, or unenforceable, such provision will be changed and interpreted to modify this Agreement so as to affect the original objectives of the provision in order that the transactions contemplated hereby be consummated as originally contemplated to the greatest extent possible.
                            9.8 Defined Terms
                            ●	“Applicable Laws” means (a) any domestic or foreign statute, law (including common and civil law), treaty, code, ordinance, rule, regulation, restriction; (b) any judgement, order, writ, injunction, decision, ruling, decree or award; (c) any regulatory policy, practice, guideline, guidance, interpretation, custom or directive or internal CrossTower policy or procedure; or (d) any qualification, authorization, consent, exemption, waiver, right, permit or other approval of any governmental authority, in each case, applicable to a User.
                            ●	“AML Program” is defined in Section 4.6
                            ●	“Content” is defined in Section 4.1
                            ●	“CrossTower Account” is defined in Section 3.3
                            ●	“CrossTower’s Privacy Policy” is defined in Section 3.4
                            ●	“Downtime” is defined in Section 3.13
                            ●	“Enhanced Due Diligence” is defined in Section 4.5
                            ●	“Force Majeure Event” is defined in Section 9.2
                            ●	“Indemnified Parties” is defined in Section 8.2
                            ●	“Prohibited Businesses” is defined in Appendix 1
                            ●	“Prohibited Transaction” means any transaction in violation of Applicable
                            ●	Law
                            ●	“Prohibited Use” is defined in Appendix 1
                            ●	“Related Account” is defined in Section 4.6
                            ●	“Security Breach” is defined in Section 7.2
                            ●	“Cryptocurrency Transaction” is defined in Section 3.5.4
                            ●	“Cryptocurrency Wallet” is defined in Section 3.5.4
                            <br />

                            APPENDIX 1: Prohibited Use and Businesses, Conditional Use and Clearly
                            Erroneous Transaction Policy
                            Prohibited Use: You may not use your CrossTower Account(s) to participate in specific activities (“Prohibited Uses “).  The specific types of use and activities listed below are representative, but not exhaustive. If you are uncertain as to whether your use of CrossTower Services involves a Prohibited Use or have questions about how these requirements apply to you, please contact us at support@crosstower.in. By opening a CrossTower Account, you agree that you will not use your Account to do any of the following:
                            Unlawful Activity: Activity which would violate or assist in violation of Applicable Law including, statutes, ordinances, regulations, sanctions programs administered in jurisdictions where CrossTower conducts business, , which would involve proceeds of any unlawful activity; publish or distribute any unlawful material or information.
                            Abusive Activity:- Actions which impose an unreasonable, excessive or disproportionately large load on our infrastructure, or detrimentally interfere with, intercept, exploit, or expropriate any critical and/or non-critical system, data, or information that CrossTower interacts with or might interact with; transmit or upload materials to the CrossTower Site that contains viruses, trojan horses, worms, malware, or any other harmful or deleterious software programs; attempt to gain unauthorized access to the CrossTower Site, other CrossTower User or Administrator Accounts, computer systems or networks connected to the CrossTower Site through password theft or any other malicious means; impersonate another party to access or use the CrossTowerSite, except in the case of specific merchants and/or applications which are explicitly authorized by a User to access the User’s CrossTower Account and information; or transfer your account access or rights to a third party, unless deemed appropriate by law or with the express permission of CrossTower.
                            Abuse Other Users:- Interfere with another individual’s or entity’s access to or use of any CrossTower Services,; defame, abuse, exploit, extort, harass, threaten or otherwise violate, infringe or interfere with the legal rights (such as, but not limited to, rights of privacy, publicity, intellectual and digital property) of others; incite, threaten, facilitate, promote, or encourage hatred, including racial intolerance, or violent acts against others; harvest or collect information from the CrossTower Sites about others, including but not limited to, names, address, email addresses, and more without proper consent.
                            Fraud:- Activity which operates to defraud CrossTower, CrossTower Users, CrossTower partners or any other person or legal entity; provide any false, fictitious, inaccurate, or misleading information to CrossTower.
                            Gambling:- Lotteries; giveaways; bidding fee auctions; sports forecasting or odds making; fantasy sports leagues with cash or monetary prizes; internet gaming; contests; sweepstakes; games of chance or luck; animal betting, wager, or competition.
                            Intellectual Property Infringement:- Engage in transactions involving items that infringe or violate any copyright, trademark, right of publicity or privacy or any other proprietary right under jurisdictional law, including but not limited to sales, distribution, dissemination, or access to counterfeit music, movies, software, digital goods or services, or other licensed materials without the appropriate authorization or express permission from the respective rights holder; use of CrossTower’s intellectual or private or public property, title, marketing campaign, name, or logo, including use of CrossTower’s trade or service marks, without express consent or permission from CrossTower or in a manner that otherwise irreparably harms the CrossTower brand; any action that implies an untrue endorsement by or affiliation with CrossTower
                            Prohibited Businesses:- In addition to the Prohibited Uses above, the following categories of businesses, enterprises, activities, business practices, and sale items are prohibited from engaging with CrossTower Services (” Prohibited Businesses “). Most Prohibited Businesses categories are imposed as per the requirements imposed on CrossTower by our banking providers or processors. The specific types of use listed below are representative, but not exhaustive. If you are uncertain as to whether your use of CrossTower Services involves Prohibited Businesses, and/or have questions about how these requirements apply to you, please contact us at support@crosstower.in.
                            By opening a CrossTower Account, you confirm that you will not use CrossTower Services in connection with any of following businesses, enterprises, activities, business practices, or sale items:
                            Games/Activities of Skill:- Any games or activities which are not defined as Gambling under this Agreement or by law, but which may require an entry fee and an award prize, monetary or not.
                            Investment and Credit Services:- Securities brokers; mortgage consulting or debt reduction/refinancing services; credit counselling or repair; real estate marketing opportunities; investment schemes or strategies.
                            Restricted Financial Services:- Check cashing, bail bonds; collections agencies.
                            Intellectual Property or Proprietary Rights Infringement:- Sales, distribution, dissemination or access to counterfeit music, movies, digital goods or services, software, or other licensed materials without the appropriate authorization and express permission from the rights holder.
                            Counterfeit or Unauthorized Goods:- Unauthorized or illegal sale or resale of brand name or designer products or services; sale of goods or services that are unauthorized, illegally imported, exported or which are stolen, or which attempt to mimic another entity’s product(s).
                            Regulated Products and Services:- Marijuana dispensaries and related businesses; sale of tobacco, e-cigarettes, e-liquid and other nicotine related products; online prescription, pharmaceutical or medical services; age restricted goods or services; weapons and munitions which can potentially cause bodily harm; fireworks and related goods; toxic, flammable, and radioactive materials; products and services with varying legal status on a state-by-state or country-by-country basis.
                            Drugs and Drug Paraphernalia:- Sale of narcotics, stimulants, opioids, controlled substances, and any equipment designed for making or using drugs, such as bongs, vaporizers, rolling paper and hookahs or the like.
                            Pseudo-Pharmaceuticals:- Pharmaceuticals, supplements, vitamins, and other products that make health or body enhancements claims that have not been approved or verified by the applicable local and/or national regulatory body.
                            Adult Content and Services:- Pornography and other obscene or crude materials (including literature, imagery, videos, and other media); sites offering any sexually related, explicit, or age-restricted services such as prostitution, escorts and pay-per view.
                            Multi-level Marketing:- Pyramid schemes, network and referral marketing programs and their promotions.
                            Unfair, Predatory or Exploitative Practices:- Investment opportunities or other services that promise high rewards, both long and short periods of time; sale or resale of a service without benefit or monetary compensation to the buyer; resale of government offerings without explicit authorization or benefit to the buyer; any site or sites that CrossTower determines to be unfair, deceptive, exploitative, or predatory towards consumers.
                            High Risk Businesses:- Any businesses that we believe poses elevated, unwelcome or unfavourable financial or legal risk, legal liability, or violates card network or bank policies.
                            Conditional Use:- Express written consent and approval from CrossTower must be obtained prior to using CrossTower Services for the following categories of business and/or use (“Conditional Uses“). Consent may be requested by contacting us at support@crosstower.in. CrossTower may also require you to agree to additional conditions or terms or limitations, make supplemental representations and warranties, complete enhanced on-boarding, and verification procedures, and operate subject to restrictions if you use CrossTower Services to engage with any of following enterprises, businesses, activities, practices, or acts:
                            Money Services:- Money transmitters or exchanges, Cryptocurrency transmitters or exchanges; fiat currency or Cryptocurrency exchanges; gift cards; prepaid cards; sale of in-game Cryptocurrency unless the merchant is the operator of the virtual world; act as a payment intermediary or aggregator or otherwise resell or repackage any of the CrossTower Services for monetary transportation purposes.
                            Charities:- Acceptance of donations for non-profit enterprises or entities.
                            Religious/Spiritual Organizations:- Operation of a for-profit religious or spiritual organization.
                            Clearly Erroneous Transactions Policy:- A “clearly erroneous transaction” (a “CRT”) occurs when a user submits an order, and that order is executed, at a price or quantity inconsistent with the prevailing settlement price for a specific Cryptocurrency on the platform. CrossTower and its employees will review questionable transactions on its platform in the interest of preserving the integrity and fairness of the market.
                            A User of CrossTower’s trading system platform constitutes its executory acceptance of CrossTower’s right to modify or to cancel transactions in accordance with this policy and guidelines.
                            Transaction Reviews Initiated by CrossTower: CrossTower reserves the right to initiate a review of a transaction, regardless of whether or not a client request has been submitted, if it determines in its sole discretion that circumstances warrant such a review. Such circumstances may include, but are not limited to, system malfunctions (either internal or those in another market centre affecting all market participants) or regulatory inquiries. In such instances, CrossTower may notify clients that a transaction will be reviewed pursuant to the Clearly Erroneous Transactions Policy.
                            Adjudicating Transactions: In the event that CrossTower designated persons determine that a material term of a reviewed transaction is clearly erroneous, said designated persons shall have the authority to declare that the transaction is null and void or modify one or more terms of the transaction. A final determination generally will be made within a twenty-four-hour period of a request being submitted. CrossTower will promptly provide oral notification of a determination to the parties involved in a disputed transaction.
                            Rules Applicable to All Clearly Erroneous Requests: Each request will be considered on a case-by-case basis. Once a request is filed, it cannot be withdrawn without the consent of both parties. Users acknowledge and agree that certain transactions if already executed to the blockchain are irreversible and that this policy does not apply in that circumstance.
                            CrossTower reserves the right to amend this policy and any other at any time by providing a revised version on our website. The revised version is effective at the posted time, and we will provide you with prompt notice of any material changes via our website.
                            <br />
                            APPENDIX 2: Verification Procedures and Limits
                            Verification Procedures and Limits: As a regulated financial service company, CrossTower is required to identify users on our platform. This ensures we remain in compliance with KYC laws in the jurisdictions which we operate in and is necessary for us to legally be able to offer Cryptocurrency exchange services to our customers. CrossTower collects and verifies information about you to:
                            Protect CrossTower and its customer community from fraudulent users and keep accurate records about CrossTower’s customers. Your daily or weekly Conversion limits, CrossTower deposit, withdrawal and trading limits are based on the identifying information and/or proof of identity you provide to CrossTower. All customers who wish to use CrossTower Services are required to establish a CrossTower Account by:
                            Providing your name and valid email address, a password and your state or country of residence.
                            Certifying that you are 18 years of age or older; Accepting CrossTower’s User Agreement and Privacy Policy, and
                            Verifying your identity by submitting the following information and any
                            corresponding documentation:
                            – Name
                            – Date of Birth (DOB)
                            – Physical address
                            – PAN & Aadhar/ Voter Id/ Passport/ Driving Licence
                            – Source of funds
                            – Selfie
                            All customers who wish to send and receive Cryptocurrency via the respective blockchain network are required to:
                            Submit a copy of an acceptable form of identification (i.e., Pan Card & passport/ driver’s license/ Voter Id/ Aadhar), Submit a picture of yourself from your webcam or mobile phone, and Provide proof of residence.
                            Excluding these minimum verification procedures for the referenced services, CrossTower may require you to provide or verify additional information, or to wait some amount of time after completing a transaction, before permitting you to use any CrossTower Services, including permitting you to engage in transactions beyond typical and defined volume limits.
                            You may contact CrossTower to request larger limits. As part of the process, CrossTower will require you to submit to Enhanced Due Diligence. Additional fees and costs may apply, and CrossTower does not guarantee that we will raise your limits.
                            CrossTower reserves the right to amend this policy and any other at any time by providing a revised version on our website. The revised version is effective at the posted time, and we will provide you with prompt notice of any material changes via our website.
                            <br />
                            APPENDIX 3:
                            E-Sign Disclosure and Consent
                            This policy describes how CrossTower communicates with you electronically. CrossTower reserves the right to amend this policy and any other at any time by providing a revised version on our website. The revised version is effective at the posted time, and we will provide you with prompt notice of any material changes via our website.
                            Electronic Delivery of Communications:
                            You agree and consent to receive electronically all communications, Terms of Use, documents, notices, and disclosures (collectively, “Communications”) that we provide regarding your CrossTower Account(s) and your use of CrossTower Services. Communications include:
                            – Terms of use and policies you agree to (e.g., the CrossTower Terms of Use and Privacy Policy), including updates to these Terms or policies.
                            – Account details, history of events, transaction receipts, number of confirmations, and any other Account or transaction information.
                            – Legal, regulatory, and tax disclosures or statements we may be legally required to make available to you; and
                            – Responses to customer support inquiries you file in connection with your Account. We will provide these Communications to you by making them available on the
                            CrossTower website, emailing them to you at the primary email address specified in your CrossTower profile, communicating to you via instant chat and/or messaging, and/or through other electronic communication mediums such as text message or mobile push notification.
                            Hardware and Software Requirements:
                            To access and retain electronic Communications we make available; you will need the following computer hardware and software:
                            – A device with an Internet connection.
                            – A current web browser that includes, at a minimum, 128-bit encryption (e.g., Internet Explorer version 9.0 and above, Firefox version 3.6 and above, Chrome version 31.0 and above, or Safari 7.0 and above) with cookies enabled.
                            – A valid email address (your primary email address on file with CrossTower); and
                            – Sufficient storage space to save past Communications or a printer to print them.
                            How to Withdraw Your Consent:
                            You may withdraw your consent to receive Communications electronically by contacting us at support@crosstower.in. If you withdraw your consent to receive Communications electronically, CrossTower reserves the right to immediately close your Account or charge you additional fees for paper (hard) copies of these Communications.
                            Updating your Information:
                            It is your responsibility to provide us with a current and accurate email address and current contact information, and to keep such information up to date in a timely manner. You understand and agree that if CrossTower sends you an electronic Communication, but you do not receive it because your primary email address on file is inaccurate, not current, overlooked, blocked by your email service provider, or you are otherwise unable to receive electronic Communications, CrossTower will be deemed to have provided the Communication to you. You may update your information by logging into your account and visiting settings or by contacting our support team at support@crosstower.in.

                        </p>
                    </div>
                </Tab>
                <Tab
                    className="customstylelink"
                    eventKey="privacypolicy"
                    title="Privacy Policy"
                >
                    <div className="mt-5 px-md-5 px-3">
                        <p className="text-general-policy-title">Privacy Statement</p>
                        <p className="text-general-policy-para">
                            Your privacy is important to us. We are committed to the fair and
                            transparent processing of our clients’, consumers’, and Website/
                            Portal visitors’ information. Our Privacy Policy (“Policy”)
                            governs your access and use of websites/ Portal produced and/or
                            maintained by us (“Sites”). The Policy is designed to advise you
                            about how we use, protect, and disclose the information we receive
                            or collect about you, explains your privacy rights and how you can
                            manage the privacy of your information. Read the following
                            information carefully. Please note that this Policy does not
                            govern the practices of third parties, such as our partners or
                            third-party service providers. Any information that you provide to
                            a third party while utilizing their website or service will be
                            governed by the third party’s privacy policy and/or terms of use.
                            You should read all third parties’ privacy policies and terms of
                            use carefully before providing your personal information.
                        </p>
                        <p className="text-general-policy-title">
                            2. Information We Collect
                        </p>
                        <p className="text-general-policy-para">
                            Personal information is defined in this Policy to include any
                            information that can be used to identify, locate, or contact you.
                            It includes your Name, Physical Address, Email address, Telephone/
                            Mobile number, and other identifying information. It also includes
                            other information that may be associated with your Personal
                            Information, such as your Location, IP Address, Preferences, or
                            Interests. We may collect your personal information when you use
                            our Sites to contact us, subscribe to our Publications or register
                            for firm events, collectively referred to as “Services.” From time
                            to time, we may obtain information about you from third party
                            sources as required or permitted by applicable law, such as public
                            databases, credit bureaus, ID verification partners, resellers and
                            channel partners, joint marketing partners, and social media
                            platforms. ID verification partners use a combination of
                            government records and publicly available information about you to
                            verify your identity. Such information includes your name,
                            address, job role, public employment profile, credit history,
                            status on any sanctions lists maintained by public authorities,
                            and other relevant data. We obtain such information to comply with
                            our legal obligations, such as anti-money laundering laws. The
                            legal basis for processing such data is compliance with legal
                            obligations. We may also gather generic, or non-personal,
                            information from our Sites’ visitors automatically, which does not
                            reveal a Site visitor’s identity. This includes the number and
                            frequency of visitors to our Sites, the specific CrossTower Sites
                            visited, and the Sites clicked on, your language preferences for
                            accessing our Sites, your browser information and screen
                            resolution, your device’s operating system, and your network
                            service provider, among other information. We gather this
                            information for limited internal purposes, such as to track,
                            customize and improve user experience with our Sites or Services.
                        </p>
                        <p className="text-general-policy-title">
                            3. How We Use Your Information
                        </p>
                        <p className="text-general-policy-para">
                            We will primarily use your information to provide you access to,
                            and facilitate your: use of the Sites, or contact with us,
                            subscription to our publications and registration for firm events,
                            where you access the Sites/ portal for those purposes. Except as
                            otherwise stated in this Policy, we will only use your personal
                            information solely for the purpose for which you submitted the
                            information. We will also use certain types of information to
                            enhance the operations of our Sites/ Portal, improve and
                            troubleshoot the performance of our Sites/ Portal, statistically
                            analyse use of the Sites/ Portal, improve our marketing and
                            promotional efforts, and customize the content, layout, and
                            performance of our Sites or Portal or Services. We may use your
                            information to assist us in delivering information and contacting
                            you when needed (for example, providing information about changes
                            in our Sites/ Portal or this Policy). Importantly, we may use your
                            information to resolve disputes, troubleshoot problems, and
                            enforce our relevant agreements with you, including this Policy
                            and our Terms of Use.
                        </p>
                        <p className="text-general-policy-title">
                            4. Purposes For Which We Seek Your Consent
                        </p>
                        <p className="text-general-policy-para">
                            We may also ask for your consent to process your personal
                            information for a specific purpose that we communicate to you, for
                            instance, to receive our newsletter and other such mailings you
                            may be interested in. When you consent to our processing your
                            personal information for a specified purpose, you may withdraw
                            your consent at any time, and we will stop processing your
                            personal information for that purpose
                        </p>
                        <p className="text-general-policy-title">
                            5. How We Disclose or Share Your Information
                        </p>
                        <p className="text-general-policy-para">
                            We may disclose your personal data to any member of our group of
                            companies (this means our subsidiaries, our ultimate holding
                            company and all its subsidiaries) insofar as reasonably necessary
                            for the purposes, and on the legal basis, set out in this policy.
                            We do not use or disclose personal information you provide on our
                            Sites to any outside companies or parties except for third-party
                            service providers who perform functions on our behalf relating to
                            our provision of Services to you that you request through use of
                            the Sites. We do not rent, sell, or trade any of our mailing
                            lists. We provide you with the right to opt-out of receiving
                            marketing and other discretionary communications, and to update,
                            supplement or delete your personal information. We may also be
                            required to disclose your information in response to a lawful and
                            enforceable request by law enforcement, judicial body, or other
                            public authorities, or in connection with a legal obligation. In
                            such instances, we will disclose your personal information upon
                            receipt of a court order, subpoena, or other lawful and
                            enforceable process, or where otherwise required by law. We
                            reserve the right to report to law enforcement any information –
                            including personal information – related to the use of our Sites
                            that we determine was used to further any unlawful activity or
                            activity we in good faith believe to be unlawful.
                        </p>

                        <p className="text-general-policy-title">
                            6. How We Protect Your Information
                        </p>

                        <p className="text-general-policy-para">
                            We employ reasonable and appropriate security measures to protect
                            your personal information from loss, misuse, unauthorized access,
                            alteration, disclosure, and destruction. While we strive to make
                            your information as secure as possible, no transmission system or
                            data network is completely secure. Therefore, by use of the Sites,
                            you acknowledge that there are data security and privacy
                            limitations inherent on the Internet, and that the security,
                            integrity, and privacy of any and all information exchanged
                            between you and us, cannot be guaranteed.
                        </p>
                        <p>
                            The safety and security of your information also depends on you.
                            Where we have given you (or where you have chosen) a password for
                            access to certain parts of the Services, you are responsible for
                            keeping this password confidential. We ask you not to share your
                            password with anyone.
                        </p>
                        <p>
                            Steps taken to ensure data security:
                            <ul>
                                <li>
                                    All the user information can only be accessed by authorized
                                    users.
                                </li>
                                <li>
                                    Users need to authenticate themselves with a username-password
                                    combination
                                </li>
                            </ul>
                        </p>

                        <p className="text-general-policy-title">
                            7. How Long We Keep Your Information
                        </p>
                        <p className="text-general-policy-para">
                            We keep your personal information to enable your continued use of
                            the Services, for as long as it is required to fulfil the relevant
                            purposes described in this Privacy Policy, as may be required by
                            applicable law, as necessary to protect our rights and interests,
                            or as otherwise communicated to you.
                        </p>

                        <p className="text-general-policy-title">
                            8. International Transfers of Your Information
                        </p>
                        <p className="text-general-policy-para">
                            We provide information about the circumstances in which your
                            personal data may be transferred to countries outside the European
                            Economic Area (EEA). We and our other group companies have offices
                            in India, USA, and Bermuda. To facilitate our operations we may
                            transfer, store, and process your information within those
                            countries or with service providers based in Bermuda, India, and
                            North America. Laws in these countries may differ from the laws
                            applicable to your Country of Residence. In cases where we need to
                            transfer personal information outside the European Union, we shall
                            ensure that adequate safeguards, as required under applicable data
                            protection legislation, will be implemented (including, as
                            applicable, the European Commission’s Standard Contractual
                            Clauses, as appropriate).
                        </p>

                        <p className="text-general-policy-title">9. Your Privacy Rights</p>
                        <p className="text-general-policy-para">
                            We will ensure that you can exercise your rights pertaining to
                            your personal information, including rights as provided by various
                            data protection laws. Where applicable under relevant law, you are
                            entitled:
                            <p className="text-general-policy-para">
                                <ul>
                                    <li>
                                        To have access to your personal information upon simple
                                        request – that is, you may receive a copy of such data (if
                                        requested), unless such data is made directly available to
                                        you, for instance within your personal account.
                                    </li>
                                    <li>
                                        To have access upon simple request, and free of charge, the
                                        categories and names of addresses of third parties that have
                                        received Personal Information for direct marketing purposes.
                                    </li>
                                    <li>
                                        To obtain a rectification of your personal information
                                        should it be inaccurate, incomplete, or obsolete.
                                    </li>
                                    <li>
                                        To obtain the deletion of your personal information in the
                                        situations set forth by applicable data protection law (the
                                        “right to be forgotten”).
                                    </li>
                                    <li>
                                        To withdraw your consent to the data processing without
                                        affecting the lawfulness of processing, where your personal
                                        information has been collected and processed based on your
                                        consent.
                                    </li>
                                    <li>
                                        To object to the processing of your personal information
                                        (where it has been collected and processed based on our
                                        legitimate interests) in which case we may ask you to
                                        justify your request by explaining to us your situation.
                                    </li>
                                    <li>
                                        To request a limitation of the data processing in the
                                        situations set forth by applicable law.
                                    </li>
                                    <li>
                                        To have your personal information directly transferred by us
                                        to a third-party processor of your choice (where technically
                                        feasible and when processing is based on your consent).
                                    </li>
                                    <li>
                                        To non-discrimination, as defined under relevant law, in the
                                        Services or quality of Services you receive from us for
                                        exercising your rights.
                                    </li>
                                </ul>
                            </p>
                            <p className="text-general-policy-para">
                                For deletion/” right to be forgotten” requests, we will
                                undertake a good faith effort to accommodate requests for access
                                to or deletion of personal information. However, these requests
                                may be subject to the evaluation of additional factors,
                                including disproportionate burden or expense, or the risk to the
                                rights, including the privacy rights, of others. We will strive
                                and work to resolve any inquiry you may have regarding our
                                privacy practices. EU residents may also file a complaint before
                                a competent data protection authority regarding the processing
                                of your personal data. While we suggest that you contact us
                                beforehand, if you wish to exercise this right, you should
                                contact the competent data protection authority directly. If you
                                have any questions, would like to exercise any of these rights,
                                or if you need any assistance with privacy related matters,
                                please contact us as described in the “Contact Us” section
                                below. We will take the necessary steps to respond to you as
                                soon as possible.
                            </p>
                        </p>

                        <p className="text-general-policy-title">10. Children</p>
                        <p className="text-general-policy-para">
                            Our Sites and Services are intended for adults and are not
                            intended for or directed to anyone under 18 years of age. We
                            therefore do not knowingly collect personal information from
                            anyone under 18 years of age. If you are under 18 years of age, do
                            not attempt to use the Site to access Services, and do not provide
                            us any personal information about yourself.
                        </p>

                        <p className="text-general-policy-title">
                            11. Changes to this Privacy Policy
                        </p>
                        <p className="text-general-policy-para">
                            The most current version of this Policy is always accessible on
                            this site. We reserve the right to make changes to our Policy at
                            any time and at our sole discretion. We encourage you to review
                            the Policy from time to time to ensure that you are familiar with
                            our practices, and aware of any changes. In addition, we will
                            notify you via email or alert on our if we make material changes
                            to the Policy and what those material changes may be.
                        </p>
                        <p className="text-general-policy-title">
                            12. Your California Privacy Rights
                        </p>
                        <p className="text-general-policy-para">
                            California Civil Code Section 1798.83 permits California residents
                            who have supplied personal information, as defined in the statute,
                            to us to request and obtain certain information regarding our
                            disclosure, if any, of personal information to third parties for
                            their direct marketing purposes. If this applies, you may obtain
                            the categories of personal information shared and the names and
                            addresses of all third parties that received personal information
                            for their direct marketing purposes during the immediately prior
                            calendar year (e.g., requests made in 2017 will receive
                            information about 2016 sharing activities). To make such a
                            request, please provide sufficient information for us to determine
                            if this applies to you, attest to the fact that you are a
                            California resident and provide a current California address for
                            our response. You may make this request in writing to us at the
                            below address. Any such request must include “California Privacy
                            Rights Request” in the first line of the description and include
                            your name, street address, city, state and ZIP code. Please note
                            that we are only required to respond to one request per customer
                            each year, and we are not required to respond to requests made by
                            means other than through this address.
                        </p>

                        <p className="text-general-policy-title">13. How to Contact Us</p>
                        <p className="text-general-policy-para">
                            f you have any questions regarding this Policy or our privacy
                            practices, please contact: CrossTower India Trading Pvt. Ltd.
                            Email: support@crosstower.in
                        </p>
                    </div>
                </Tab>
                <Tab className="customstylelink" eventKey="security" title="Legal Security">
                    <div className="mt-5 px-md-5 px-3">
                        <p className="text-general-policy-title">Security</p>
                        <p className="text-general-policy-para">
                            At the CrossTower, we consider the security of our systems a top
                            priority. But no matter how much effort we put into system
                            security, there can still be vulnerabilities present. If you
                            discover a vulnerability, we would like to know about it so we can
                            take steps to address it as quickly as possible. We would like to
                            ask you to help us better protect our clients and our systems.
                            <p className="text-general-policy-para">
                                Please do the following:
                                <ul>
                                    <li>E-mail your findings to itsecurity@crosstower.in,</li>
                                    <li>
                                        Do not take advantage of the vulnerability or problem you
                                        have discovered, for example by downloading more data than
                                        necessary to demonstrate the vulnerability or deleting or
                                        modifying other people's data,
                                    </li>
                                    <li>
                                        Do not reveal the problem to others until it has been
                                        resolved,
                                    </li>
                                    <li>
                                        Do not use attacks on physical security, social engineering,
                                        distributed denial of service, spam or applications of third
                                        parties, and
                                    </li>
                                    <li>
                                        Do provide sufficient information to reproduce the problem,
                                        so we will be able to resolve it as quickly as possible.
                                        Usually, the IP address or the URL of the affected system
                                        and a description of the vulnerability will be sufficient,
                                        but complex vulnerabilities may require further explanation.
                                    </li>
                                </ul>
                            </p>
                            <p className="text-general-policy-para">
                                What we promise:
                                <ul>
                                    <li>
                                        We will respond to your report within 3 business days with
                                        our evaluation of the report and an expected resolution
                                        date,
                                    </li>
                                    <li>
                                        If you have followed the instructions above, we will not
                                        take any legal action against you in regard to the report,
                                    </li>
                                    <li>
                                        We will handle your report with strict confidentiality, and
                                        not pass on your personal details to third parties without
                                        your permission,
                                    </li>
                                    <li>
                                        We will keep you informed of the progress towards resolving
                                        the problem,
                                    </li>
                                    <li>
                                        In the public information concerning the problem reported,
                                        we will give your name as the discoverer of the problem
                                        (unless you desire otherwise), and
                                    </li>
                                    <li>
                                        As a token of our gratitude for your assistance, we offer a
                                        reward for every report of a security problem that was not
                                        yet known to us. The amount of the reward will be determined
                                        based on the severity of the leak and the quality of the
                                        report.
                                    </li>
                                </ul>
                                We strive to resolve all problems as quickly as possible, and we
                                would like to play an active role in the ultimate publication on
                                the problem after it is resolved.
                            </p>
                        </p>
                    </div>
                </Tab>
                <Tab
                    className="customstylelink"
                    eventKey="disclaimer"
                    title="Disclaimer"
                >
                    <div className="mt-5 px-md-5 px-3">
                        <p className="text-general-policy-title">Disclaimer</p>
                        <p className="text-general-policy-para">
                            Crypto-asset or cryptocurrency investments are subject to market
                            risks such as volatility and have no guaranteed returns. Please do
                            your own research before investing and seek independent
                            legal/financial advice if you are unsure about the investments.
                        </p>
                    </div>
                </Tab>
                <Tab
                    className="customstylelink"
                    eventKey="cookiepolicy"
                    title="Cookie Policy"
                >
                    <div className="mt-5 px-md-5 px-3">
                        <p className="text-general-policy-title">Cookie Policy </p>
                        <p className="text-general-policy-para">
                            CrossTower uses cookies and similar technologies when you visit
                            our website or any other websites, pages, features, or content we
                            own or operate (collectively, the “Site(s)”), when you use the
                            CrossTower mobile app, and/or interact with CrossTower online
                            advertisements or marketing emails (collectively the “Services”).
                            It explains what these technologies are and why we use them, as
                            well as your rights to control our use of them. In some cases, we
                            may use cookies and similar technologies to collect personal
                            information, or information that becomes personal information if
                            we combine it with other information. In such cases the CrossTower
                            Privacy Policy will apply in addition to this Cookie Policy.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        </>
    );
}
const TermMain = () => {

    return (
        <>

            <ControlledTabs />
        </>
        // <div className="mt-5 px-md-5 px-3">
        //   <p className="text-general-policy-title">1.Disclaimer</p>
        //   <p className="text-general-policy-para">
        //     Crypto-asset or cryptocurrency investments are subject to market risks
        //     such as volatility and have no guaranteed returns. Please do your own
        //     research before investing and seek independent legal/financial advice if
        //     you are unsure about the investments.
        //   </p>
        // </div>
    );
};

export default TermMain;
