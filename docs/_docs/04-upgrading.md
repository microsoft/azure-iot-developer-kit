---
title: "Upgrade firmware for your DevKit"
permalink: /docs/upgrading/
excerpt: "Instructions and suggestions for upgrading the theme."
last_modified_at: 2016-11-03T10:16:34-04:00
---

## Write app

1. In VS Code, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then filter out **Arduino: Boards Manager** to open the pane:
 ![getting-started-board-manager]({{"/assets/images/getting-started-board-manager.jpg" | absolute_url }})

2. In the search box, type 'az' to find package for DevKit, click **Update** button to update the board package to latest version:
 ![getting-started-board-manager-az]({{"/assets/images/getting-started-board-manager-az.jpg" | absolute_url }})

3. Invoke command palette and type **Arduino** then find and select **Arduino: Examples** to open example pane, find `Built-in Examples > 01.Basics > Blink` to open a simple Arduino example app:
 ![getting-started-blink]({{"/assets/images/getting-started-blink.jpg" | absolute_url }})

4. Invoke command again and type **Arduino**, this time select **Arduino: Upload**:
 ![getting-started-upload]({{"/assets/images/getting-started-upload.jpg" | absolute_url }})

This will flash the latest firmware to your DevKit.
