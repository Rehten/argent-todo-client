import { ArgentInput } from './index';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import React from "react";
import TestRenderer from 'react-test-renderer';

describe('ArgentInput', () => {
    let container: HTMLElement;

    beforeEach(() => {
        // подготавливаем DOM-элемент, куда будем рендерить
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // подчищаем после завершения
        unmountComponentAtNode(container);
        container.remove();
        container = (null as any) as HTMLElement;
    });

    it('should be object', () => {
        expect(ArgentInput).toBeDefined();
        expect(ArgentInput).not.toBeNull();
        expect(ArgentInput).toBeInstanceOf(Object);
    });

    it('should containt HTML input node', () => {
        act(() => {
            render(<ArgentInput />, container);
        });

        const htmlInput: HTMLInputElement | null = container.querySelector('input');

        expect(htmlInput).not.toBeNull();
    });

    it('should have div wrapper with data-test id', () => {
        const testMarker: string = 'Qwerty';

        act(() => {
            render(<ArgentInput dataTest={testMarker} />, container);
        });

        const divWrapper: HTMLDivElement | null = container.querySelector(`div[data-test]`);

        expect(divWrapper).not.toBeNull();
        expect(divWrapper?.dataset.test).toEqual(testMarker);
    });

    it('should be same as snapshot', () => {
        const rslt = TestRenderer.create(<ArgentInput dataTest="Snapshot Testing" />);
        expect(rslt).toMatchSnapshot();
    });
});
