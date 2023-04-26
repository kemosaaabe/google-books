import React, { FC } from 'react';
import { Listbox } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Select.module.scss';
import { useAppDispatch } from '../../../app/hooks';
import { updateFilter, updateCategory } from '../../../feautures/booksSlice';
import { Item } from '../../../layout/Header/selectData';

interface SelectProps {
    type: 'filters' | 'categories';
    items: Item[];
}

const Select: FC<SelectProps> = ({ type, items }) => {
    const [selected, setSelected] = React.useState(items[0]);
    const dispatch = useAppDispatch();

    const onSelect = (item: Item) => {
        setSelected(item);

        switch (type) {
            case 'filters':
                dispatch(updateFilter({ filter: item.value }));
                break;
            case 'categories':
                dispatch(updateCategory({ category: item.value }));
                break;
        }
    };

    return (
        <Listbox value={selected} onChange={onSelect}>
            {({ open }) => (
                <>
                    <Listbox.Button className={styles.listBoxSelected}>
                        <span>{selected.text}</span>
                    </Listbox.Button>
                    <AnimatePresence>
                        {open && (
                            <Listbox.Options
                                static
                                as={motion.ul}
                                initial={{
                                    opacity: 0,
                                    scale: 0.75,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                                key="motionUL"
                                className={styles.listBoxItems}
                            >
                                {items.map((item) => (
                                    <Listbox.Option
                                        key={item.id}
                                        value={item}
                                        className={styles.listBoxItem}
                                    >
                                        {item.text}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Listbox>
    );
};

export default Select;
