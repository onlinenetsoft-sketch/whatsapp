export class TeamService {
    async inviteMember(email, role) {
      return {
        email,
role,
        invited: true
      };
  }
}