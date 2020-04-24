# TemplReact

React templates with focus on: 
- typescript
- few dependencies
- as transparent as possible, no magic
- support for core functionality such as: hot module replacement, css modules etc.
- some intended for larger applications (code splitting etc., 24.4.2020 not implementd yet)
- starting point developing react applictions



Different templates
- Basic_Template
-- starting point, other templates should base on this
-- not necessarily made for scalability as no code splittig etc
- Basic_Template_withHookstate
-- build on basic templates: testing, scalability, state mgm (24.4.2020, not implemented yet)
-- starting point for larger applications using hookstate
- Possible other templates (24.4.2020, not implemented yet)
-- Template for scalability and testing
--- no global state mgm as we want to choose the library ourselves (Redux, mobx, hookstate etc.)
-- Template for scalability
--- no testing as we might want a different testing framework, also no global state mgm

At the moment, no intend to implement/support server side rendering via node etc.


Showcases folder: 
- should showcase a specific library (example: routing) or maybe also a certain approach to a certain problem



Important info: these are the authors first steps with webpack. .. likelyhood of getting it right is small :-)
Templates were implemented for private purposes (though anyone can use it) and with the goal of a) get starting templates without hiding the magic like other cli's b) learning something (though author probably doesn't have the time to delve deep into the setup.. therefore relying stuff found on the internet)