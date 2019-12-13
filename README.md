# GPII "no-os" stubs

Contains stubs for platform-specific components of the GPII architecture. See [http://gpii.net/](http://gpii.net/) for
overall details of the GPII project. After checkout using git, this project will require node.js and npm to be
installed - please consult [Setting Up Your Development Environment](http://wiki.gpii.net/w/Setting_Up_Your_Development_Environment)
for installation instructions.

This module exists to support developers who are porting Morphic to new operating systems.  When adding support for a new operating
system, this "no-os" module can be used as the basis for that OS's new platform-specific module.

## Building the "no-os" stubs

This package depends on node 6.x (LTS).

To build the no-os stubs for GPII, perform the following:

    git clone https://github.com/GPII/gpii-no-os.git
    cd gpii-no-os
    npm install

