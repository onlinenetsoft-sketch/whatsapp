export class TemplateService {
    async compileTemplate(template, variables) {
      let content = template;
        Object.keys(variables).forEach(key => {
        content = content.replaceAll(`{{${key}}}`, variables[key]);
});
      return content;
    }
}