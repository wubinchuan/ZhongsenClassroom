import { IUserInfo, IPage, IPlayRecord } from '~/types/api';

/**
 * 注册接口
 * @param options code:验证码 phone:手机号
 */
export const register = async (options: { code: string; phone: string }) => {
  return await useApi<null>('/user/v1/register', {
    method: 'post',
    body: options,
  });
};

/**
 * 登录接口
 * @param options code:验证码 phone:手机号 password:密码
 */
export const login = async (options: {
  phone: string;
  code?: string;
  password?: string;
}) => {
  return await useApi<string>('/user/v1/login', {
    method: 'post',
    body: options,
  });
};

/**
 * 修改密码接口
 * @param options code:验证码 phone:手机号 password:密码
 */
export const forget = async (options: {
  phone: string;
  code: string;
  password: string;
}) => {
  return await useApi<null>('/user/v1/forget', {
    method: 'post',
    body: options,
  });
};

/**
 * 获取用户信息
 */
export const getUserInfo = async function () {
  return await useApi<IUserInfo>('/user/v1/detail');
};

/**
 * 获取最近播放记录数据
 * @param params size: 每页条数, page: 页码
 */
export const getPlayRrecord = async function (params: {
  page: number;
  size: number;
}) {
  return await useApi<IPage<IPlayRecord>>('/user/v1/play_record', {
    method: 'post',
    body: params,
  });
};

/**
 * 修改个人信息
 */
export const updateUserInfo = async function (params: any) {
  return await useApi<null>('/user/v1/update', {
    method: 'POST',
    body: params,
  });
};

/**
 * 上报学习时长
 * @param params 请求参数 productId-视频ID episodeId-集ID duration-视频时长
 */
export const add = async function (params: {
  productId: number;
  episodeId: number;
  duration: number;
}) {
  return await useApi<null>('/user/v1/duration_record', {
    method: 'POST',
    body: params,
  });
};

