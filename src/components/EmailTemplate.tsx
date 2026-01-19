import { Typography } from '@mui/material';
import * as React from 'react';

interface EmailTemplateProps{
    firstName:'string'
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({firstName}) =>(
    <Typography>Welcome {firstName}</Typography>
)