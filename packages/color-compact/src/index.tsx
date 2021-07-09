import React, { useCallback } from 'react';
import {
  ColorResult,
  color as handleColor,
  hexToHsva,
  validHex,
  HsvaColor,
  hsvaToHex,
  getContrastingColor,
  hsvaToRgba,
  RgbaColor,
  rgbaToHsva,
} from '@uiw/color-convert';
import EditableInput, { EditableInputProps } from '@uiw/react-color-editable-input';

export interface CompactProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  colors?: string[];
  onChange?: (color: ColorResult, evn?: T) => void;
}

const COLORS = [
  '#4D4D4D',
  '#999999',
  '#FFFFFF',
  '#F44E3B',
  '#FE9200',
  '#FCDC00',
  '#DBDF00',
  '#A4DD00',
  '#68CCCA',
  '#73D8FF',
  '#AEA1FF',
  '#FDA1FF',
  '#333333',
  '#808080',
  '#cccccc',
  '#D33115',
  '#E27300',
  '#FCC400',
  '#B0BC00',
  '#68BC00',
  '#16A5A5',
  '#009CE0',
  '#7B64FF',
  '#FA28FF',
  '#000000',
  '#666666',
  '#B3B3B3',
  '#9F0500',
  '#C45100',
  '#FB9E00',
  '#808900',
  '#194D33',
  '#0C797D',
  '#0062B1',
  '#653294',
  '#AB149E',
];

const EditableInputRGB = ({ style, ...props }: EditableInputProps) => (
  <EditableInput
    labelStyle={{ paddingRight: 5, marginTop: -1 }}
    inputStyle={{
      outline: 'none',
      boxShadow: 'initial',
      background: 'transparent',
    }}
    style={{
      flexDirection: 'row-reverse',
      flex: '1 1 0%',
      ...style,
    }}
    {...props}
  />
);

export default React.forwardRef<HTMLDivElement, CompactProps<React.MouseEvent<HTMLDivElement, MouseEvent>>>((props, ref) => {
  const { prefixCls = 'w-color-compact', className, style, onChange, color, colors = COLORS, ...other } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color) as HsvaColor;
  const handleClick = (hexStr: string, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onChange && onChange(handleColor(hexToHsva(hexStr)), evn);
  };
  const rgba = (color ? hsvaToRgba(hsva) : {}) as RgbaColor;
  const hex = color ? hsvaToHex(hsva).replace(/^#/, '') : '';
  const handleChangeCallback = useCallback((hsv: HsvaColor) => onChange && onChange(handleColor(hsv)), [hsva]);
  const handleChange = (value: string | number, type: 'hex' | 'r' | 'g' | 'b', evn: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'number') {
      if (value > 255) {
        value = 255;
        evn.target.value = '255';
      }
      if (value < 0) {
        value = 0;
        evn.target.value = '0';
      }
      if (type === 'r') {
        handleChangeCallback(rgbaToHsva({ ...rgba, r: value }));
      }
      if (type === 'g') {
        handleChangeCallback(rgbaToHsva({ ...rgba, g: value }));
      }
      if (type === 'b') {
        handleChangeCallback(rgbaToHsva({ ...rgba, b: value }));
      }
    }
    if (typeof value === 'string' && type === 'hex' && validHex(value) && /(3|6)/.test(String(value.length))) {
      handleChangeCallback(hexToHsva(value));
    }
  };
  function handleBlur(evn: React.FocusEvent<HTMLInputElement>) {
    const value = Number(evn.target.value);
    if (value && value > 255) {
      evn.target.value = '255';
    }
    if (value && value < 0) {
      evn.target.value = '0';
    }
  }
  return (
    <div
      ref={ref}
      style={{
        background: '#f6f6f6',
        borderRadius: 3,
        display: 'flex',
        width: 240,
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingLeft: 5,
        ...style,
      }}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      {...other}
    >
      {colors.map((hex, idx) => {
        const checked = hsva && hsvaToHex(hsva).toLocaleLowerCase() === hex.toLocaleLowerCase();
        return (
          <div
            key={hex}
            style={{
              boxSizing: 'border-box',
            }}
          >
            <div
              onClick={(evn) => handleClick(hex, evn)}
              title={hex}
              style={{
                backgroundColor: hex,
                height: 15,
                width: 15,
                marginRight: 5,
                marginBottom: 5,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
              }}
            >
              {checked && (
                <div
                  style={{
                    height: 5,
                    width: 5,
                    borderRadius: '50%',
                    backgroundColor: getContrastingColor(hex),
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
      <div style={{ display: 'flex', margin: '0 4px 3px 0' }}>
        <EditableInputRGB
          style={{ minWidth: 80 }}
          onChange={(evn, val) => handleChange(val, 'hex', evn)}
          label={<div style={{ width: 8, height: 8, backgroundColor: `#${hex}` }} />}
          value={hex}
        />
        <EditableInputRGB
          label="R"
          value={rgba.r || 0}
          onBlur={handleBlur}
          onChange={(evn, val) => handleChange(val, 'r', evn)}
        />
        <EditableInputRGB
          label="G"
          value={rgba.g || 0}
          onBlur={handleBlur}
          onChange={(evn, val) => handleChange(val, 'g', evn)}
        />
        <EditableInputRGB
          label="B"
          value={rgba.b || 0}
          onBlur={handleBlur}
          onChange={(evn, val) => handleChange(val, 'b', evn)}
        />
      </div>
    </div>
  );
});
