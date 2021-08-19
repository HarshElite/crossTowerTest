import React from "react";

const Section2 = () => {
    return (
        <div className="mt-5 px-md-5 px-3">
            <p className="text-general-policy-title">1.Security</p>
            <p className="text-general-policy-para">
                At the CrossTower, we consider the security of our systems a top priority. But no matter how much effort we put into system security, there can still be vulnerabilities present.
                If you discover a vulnerability, we would like to know about it so we can take steps to address it as quickly as possible. We would like to ask you to help us better protect our clients and our systems.
                <p className="text-general-policy-para">
                Please do the following:
                    <ul>
                        <li>
                    	E-mail your findings to itsecurity@crosstower.in,
                        </li>
                        <li>
                        Do not take advantage of the vulnerability or problem you have discovered, for example by downloading more data than necessary to demonstrate the vulnerability or deleting or modifying other people's data,
                        </li>
                        <li>
                        Do not reveal the problem to others until it has been resolved,
                        </li>
                        <li>
                	    Do not use attacks on physical security, social engineering, distributed denial of service, spam or applications of third parties, and
                        </li>
                        <li>
                        Do provide sufficient information to reproduce the problem, so we will be able to resolve it as quickly as possible. Usually, the IP address or the URL of the affected system and a description of the vulnerability will be sufficient, but complex vulnerabilities may require further explanation.
                        </li>
                    </ul>
                </p>
                <p className="text-general-policy-para">
                What we promise:
                    <ul>
                        <li>
                        We will respond to your report within 3 business days with our evaluation of the report and an expected resolution date,
                        </li>
                        <li>
                        If you have followed the instructions above, we will not take any legal action against you in regard to the report,
                        </li>
                        <li>
                        We will handle your report with strict confidentiality, and not pass on your personal details to third parties without your permission,
                        </li>
                        <li>
                        We will keep you informed of the progress towards resolving the problem,
                        </li>
                        <li>
                        In the public information concerning the problem reported, we will give your name as the discoverer of the problem (unless you desire otherwise), and
                        </li>
                        <li>
                        As a token of our gratitude for your assistance, we offer a reward for every report of a security problem that was not yet known to us. The amount of the reward will be determined based on the severity of the leak and the quality of the report.
                        </li>
                    </ul>
                	 We strive to resolve all problems as quickly as possible, and we would like to play an active role in the ultimate publication on the problem after it is resolved.
                </p>
            </p>
        </div>
    );
};

export default Section2;