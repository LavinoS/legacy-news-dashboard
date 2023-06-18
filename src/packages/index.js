import { lazy } from 'react';

//Page components exported as lazy components
export const RegisterPage = lazy(() => import('./register-page'));
export const LoginPage = lazy(() => import('./login-page'));
export const Dashboard = lazy(() => import('./dashboard'));
export const EditDesign = lazy(() => import('./edit-design'));
