import React from 'react';
import { ArgentButton } from './index';

export default { title: 'ArgentButton' };

export const colors = () => <div style={{display: 'inline-flex', justifyContent: 'space-between'}}>
    <ArgentButton variant="primary">Primary</ArgentButton>,
    <ArgentButton variant="secondary">Secondary</ArgentButton>,
</div>;
