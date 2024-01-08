module.exports = {
  apps : [{
    name: 'nvidia_ntu_ai_joint_research_center',
    watch: false
  }],

  deploy : {
    production : {
      user : 'nvweb',
      host : '140.112.21.13',
      ref  : 'origin/main',
      repo : 'https://github.com/Ethan-Chiu/workshop.git',
      path : '/home/nvweb/nvwebpage_source',
      'post-deploy': 'chmod +x ./deploy.sh && ./deploy.sh',
    }
  }
};
