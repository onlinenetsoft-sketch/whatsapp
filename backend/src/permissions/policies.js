const roles = require('./roles');
const permissions = require('./permissions');

const rolePermissions = {
  [roles.SUPER_ADMIN]: Object.values(permissions),

  [roles.ADMIN]: [
    permissions.CREATE_USER,
    permissions.UPDATE_USER,
    permissions.VIEW_USERS,
    permissions.SEND_MESSAGE,
    permissions.VIEW_ANALYTICS,
    permissions.MANAGE_TEMPLATES,
  ],

  [roles.MANAGER]: [
    permissions.VIEW_USERS,
    permissions.SEND_MESSAGE,
    permissions.VIEW_ANALYTICS,
  ],

  [roles.AGENT]: [
    permissions.SEND_MESSAGE,
  ],

  [roles.CUSTOMER]: [],
};

const hasPermission = (role, permission) => {
  return rolePermissions[role]?.includes(permission);
};

module.exports = {
  rolePermissions,
  hasPermission,
};