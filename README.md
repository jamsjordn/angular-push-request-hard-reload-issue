# Angular Push Request Hard Reload Issue

Reproduction for https://github.com/angular/angular/issues/48702

## How To

`ng build`

serve the output (repo is set up for vs code live server)

When you hard reload the browser page (cmd+shift+r) and click "Register for Notifications" you will not be presented with the allow notifications browser UI

If you regular reload the browser page and click the button you will be presented with the allow notifications UI
