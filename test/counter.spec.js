import { mount } from 'vue-test-utils';
import Counter from '../src/components/Counter.vue';
import expect from 'expect';

describe('Counter', () => {
    let wrapper; 
    beforeEach(() => {
        wrapper = mount(Counter);
    });

    it('Valor por defecto 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    it('Aumenta el valor de count al hacer click en el boton aumentar', () => {
        expect(wrapper.vm.count).toBe(0);

        wrapper.find('.aumentar').trigger('click');

        expect(wrapper.vm.count).toBe(1);
    });

    it('Valor nunca esta por debajo de 0', () => {
        expect(wrapper.vm.count).toBe(0);

        wrapper.find('.disminuir').trigger('click');

        expect(wrapper.vm.count).toBe(0);
    });

    it('Disminuye el valor de count al hacer click en el boton disminuir', () => {
        wrapper.setData({
            count: 10
        });
        
        wrapper.find('.disminuir').trigger('click'); // count 9

        expect(wrapper.vm.count).toBe(9);
    });

    it('si el valor de count es 0, el boton disminuir debe estar oculto', () => {
        expect(wrapper.vm.count).toBe(0);
        expect(wrapper.find('.disminuir').hasStyle('display', 'none')).toBe(true);
    });

    it.only('si el valor de count es 0, el boton disminuir no debe existir', () => {
        expect(wrapper.vm.count).toBe(0);
        expect(wrapper.find('.disminuir').exists()).toBe(false);
    });

    it('Valor es mostrado al usuario', () => {
        expect(wrapper.find('.count').html()).toContain(0);

        wrapper.find('.aumentar').trigger('click');

        expect(wrapper.find('.count').html()).toContain(1);
    });


});