# Contributing

**The IoT DevKit Tooling team wants to hear from you!**

- [Ask a question](#ask-a-question)
- [File a bug](#file-a-bug)
- [Contribute documentation](#contribute-documentation)
- [Contribute code](#contribute-code)
- [Code of Conduct](#Open-Source-Code-of-Conduct)

Note we have a code of conduct, please follow it in all your interactions with the project.

# Ask a question
Our team monitors the [chat room](https://gitter.im/Microsoft/azure-iot-developer-kit). It really is the best place to ask.

We monitor the Github issues section specifically for bugs found with our SDK, however we will reply to questions asked using Github issues too.

# File a bug
That is definitely something we want to hear about. Please open an issue on github, we'll address it as fast as possible. Typically here's the information we're going to ask for to get started:

- What version of the SDK you are using?
- Do you have a snippet of code that would help us reproduce the bug?
- Do you have logs showing what's happening?
- And please share all repro steps for your issue.

*Our IoT DevKit SDK are open-source and we do accept pull-requests if you feel like taking a stab at fixing the bug and maybe adding your name to our commit history :) Please mention any relevant issue number in the pull request description.* Please see [Contribute code](#contribute-code) below.

# Contribute code or documentation
We require pull-requests for code and documentation to be submitted against the `master` branch in order to review and run it in our gated build system. 

## Build and Run From Source

If you want to understand how Code works or want to debug an issue, you'll want to get the source, and run it locally.

You'll need [git] to download source code and copy it to the Arduino target folder. 

### Windows

```
git clone https://github.com/Microsoft/AzureIoTDeveloperKit

cd AzureIoTDeveloperKit\AZ3166\src

xcopy /s .\*.* C:\Users\{your name}\AppData\Local\Arduino15\packages\AZ3166\hardware\stm32f4\{version} /I /R /Y
```

### OS X

```
git clone https://github.com/Microsoft/AzureIoTDeveloperKit

cd AzureIoTDeveloperKit/AZ3166

cp -R /src/. ~/Library/Arduino15/packages/AZ3166/hardware/stem32f4/{version} 
```

### Validate your changes
To test the changes you launch VS Code on the Arduino target folder for AZ3166 samples, which you are currently editing.
Run the sample code to verify your change.

Also, have you signed the [Contribution License Agreement](https://cla.microsoft.com/) ([CLA](https://cla.microsoft.com/))? A friendly bot will remind you about it when you submit your pull-request.

**If your contribution is going to be a major effort, you should give us a heads-up first. We have a lot of items captured in our backlog and we release every week, so before you spend the time, just check with us to make sure your plans and ours are in sync :) Just open an issue on github and tag it as "contribution".**

## Review Process
We expect all guidelines to be met before accepting a pull request. As such, we will work with you to address issues we find by leaving comments in your code. Please understand that it may take a few iterations before the code is accepted as we maintain high standards on code quality. Once we feel comfortable with a contribution, we will validate the change and accept the pull request.

Thank you for any contributions! Please let the team know if you have any questions or concerns about our contribution policy. 

# Open Source Code of Conduct

This code of conduct outlines expectations for participation in Microsoft-managed open source communities, as well as steps for reporting unacceptable behavior. We are committed to providing a welcoming and inspiring community for all. People violating this code of conduct may be banned from the community.

Our open source communities strive to:

* __Be friendly and patient:__ Remember you might not be communicating in someone else's primary spoken or programming language, and others may not have your level of understanding.

* __Be welcoming:__ Our communities welcome and support people of all backgrounds and identities. This includes, but is not limited to members of any race, ethnicity, culture, national origin, color, immigration status, social and economic class, educational level, sex, sexual orientation, gender identity and expression, age, size, family status, political belief, religion, and mental and physical ability.

* __Be respectful:__  We are a world-wide community of professionals, and we conduct ourselves professionally. Disagreement is no excuse for poor behavior and poor manners. Disrespectful and unacceptable behavior includes, but is not limited to:

     - Violent threats or language.
     - Discriminatory or derogatory jokes and language.
     - Posting sexually explicit or violent material.
     - Posting, or threatening to post, people's personally identifying information ("doxing").
     - Insults, especially those using discriminatory terms or slurs.
     - Behavior that could be perceived as sexual attention.
     - Advocating for or encouraging any of the above behaviors.

* __Understand disagreements:__  We are a world-wide community of professionals, and we conduct ourselves professionally. Disagreement is no excuse for poor behavior and poor manners. Disrespectful and unacceptable behavior includes, but is not limited to:
 
*  This code is not exhaustive or complete. It serves to capture our common understanding of a productive, collaborative environment. We expect the code to be followed in spirit as much as in the letter.

### Scope
This code of conduct applies to all repos and communities for Microsoft-managed open source projects regardless of whether or not the repo explicitly calls out its use of this code. The code also applies in public spaces when an individual is representing a project or its community. Examples include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

Note: Some Microsoft-managed communities have codes of conduct that pre-date this document and issue resolution process. While communities are not required to change their code, they are expected to use the resolution process outlined here. The review team will coordinate with the communities involved to address your concerns.

### Reporting Code of Conduct Issues

We encourage all communities to resolve issues on their own whenever possible. This builds a broader and deeper understanding and ultimately a healthier interaction. In the event that an issue cannot be resolved locally, please feel free to report your concerns by contacting opencode@microsoft.com. Your report will be handled in accordance with the issue resolution process described in the Code of Conduct FAQ.

In your report please include:

* Your contact information.
* Names (real, usernames or pseudonyms) of any individuals involved. If there are additional witnesses, please include them as well.
* Your account of what occurred, and if you believe the incident is ongoing. If there is a publicly available record (e.g. a mailing list archive or a public chat log), please include a link or attachment.
* Any additional information that may be helpful.

All reports will be reviewed by a multi-person team and will result in a response that is deemed necessary and appropriate to the circumstances. Where additional perspectives are needed, the team may seek insight from others with relevant expertise or experience. The confidentiality of the person reporting the incident will be kept at all times. Involved parties are never part of the review team. 

Anyone asked to stop unacceptable behavior is expected to comply immediately. If an individual engages in unacceptable behavior, the review team may take any action they deem appropriate, including a permanent ban from the community. 

_This code of conduct is based on the [template][template] established by the [TODO Group][group] and used by numerous other large communities (e.g., Facebook, Yahoo, Twitter, GitHub) and the Scope section from the [Contributor Covenant version 1.4.][version]_

[template]: http://todogroup.org/opencodeofconduct
[group]: http://todogroup.org/
[version]: http://contributor-covenant.org/version/1/4/
[git]: https://git-scm.com/

