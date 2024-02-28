# Module folder

## About
- A module is domain from solution. It can be related to a macro product or a threatre. 
- It can be a common domain not binded to a macro product but the intersection between some or a utils domains.

## Folder format
 - module/
   - archetype1/
     - commons/
     - submodule/
       - /implementations
         - /implementation1
           - {anyFolderformat}
           - ImplementationConcreteClass
           - ImplementationConcreteClass.spec
       - /Interfaces
         - /{SubmoduleRelatedErrors}
         - /EventRequestInterface 
         - /EventResponseInterface
         - /EventInterface
         - /Token 
     - subModule2/
   - archetype2/
     - ...So on

## Types of folders
 - Archetype:
   -  refers to a subgroup of the architecture.
   - It is detailed on specific readme
 - commons:
   - It is helpers used in that scope
 - subModule:
   - It is a event. One which is called by other events
   - The granular unit of the architecture