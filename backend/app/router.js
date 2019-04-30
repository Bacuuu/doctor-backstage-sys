'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 首页
  router.get('/', controller.home.index);

  // 登陆界面
  router.get('/signinPage', controller.home.signin);

  // 用户登录
  // username password
  router.post('/signin', controller.user.signin);

  // 医生管理界面
  router.get('/managePage/:username', controller.user.managePage);

  // 用户登出
  // router.post('/signout', controller.user.signout);

  // 获取该医生的患者列表
  // type 0 1 2 3  根据度数分类患者类型
  // router.post('/patientList', controller.patient.getPatientList);

  // 获取患者具体信息
  // id 患者id
  router.post('/patientInfo', controller.patient.getPatientInfo);

  // 标记患者
  // id 患者id
  router.post('/buffPatient', controller.patient.buff);

  // 取消标记患者
  // id 患者id
  router.post('/releaseBuffPatient', controller.patient.releaseBuff);
};
