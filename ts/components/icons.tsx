import React from 'react';
import { FC, memo } from 'react';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';

export type SvgProps = {
	width?: number;
	height?: number;
	stroke?: string;
	strokeWidth?: number;
	fill?: string;
};

export const MenuIcon: FC<SvgProps> = memo(
	({
		width = 24,
		height = 24,
		fill = 'none',
		stroke = 'currentColor',
		strokeWidth = 2,
	}) => (
		<Svg width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</Svg>
	),
);

export const SearchIcon: FC<SvgProps> = memo(
	({
		width = 24,
		height = 24,
		fill = 'none',
		stroke = 'currentColor',
		strokeWidth = 2,
	}) => (
		<Svg width={width} height={height} fill={fill} viewBox="0 0 24 24" stroke={stroke}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</Svg>
	),
);

export const DiscIcon: FC<SvgProps> = memo(
	({
		width = 24,
		height = 24,
		fill = 'none',
		stroke = 'currentColor',
		strokeWidth = 2,
	}) => (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill={fill}
			stroke={stroke}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Circle cx={12} cy={12} r={10} />
			<Circle cx={12} cy={12} r={3} />
		</Svg>
	),
);

export const MicrophoneIcon: FC<SvgProps> = ({
	width = 24,
	height = 24,
	fill = 'none',
	stroke = 'currentColor',
	strokeWidth = 2,
}) => (
	<Svg width={width} height={height} fill={fill} viewBox="0 0 24 24" stroke={stroke}>
		<Path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={strokeWidth}
			d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
		/>
	</Svg>
);

export const MusicIcon: FC<SvgProps> = memo(
	({
		width = 24,
		height = 24,
		fill = 'none',
		stroke = 'currentColor',
		strokeWidth = 2,
	}) => (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill={fill}
			stroke={stroke}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Path d="M9 18V5l12-2v13" />
			<Circle cx={6} cy={18} r={3} />
			<Circle cx={18} cy={16} r={3} />
		</Svg>
	),
);

export const PlaylistIcon: FC<SvgProps> = memo(
	({
		width = 12,
		height = 14,
		fill = 'none',
		stroke = 'currentColor',
		strokeWidth = 1.5,
	}) => (
		<Svg width={width} height={height} viewBox="0 0 12 14" fill={fill}>
			<Ellipse
				cx={8}
				cy={11}
				rx={3}
				ry={2}
				transform="rotate(-10 8 11)"
				fill={stroke}
			/>
			<Path
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				d="M10.25.75v9.5M.75 1.25h6.5M.75 4.25h6.5M.75 7.25h6.5"
			/>
		</Svg>
	),
);

export const SettingsIcon: FC<SvgProps> = memo(
	({
		width = 24,
		height = 24,
		fill = 'none',
		stroke = 'currentColor',
		strokeWidth = 1.5,
	}) => (
		<Svg width={width} height={height} fill={fill} viewBox="0 0 24 24" stroke={stroke}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
				d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
			/>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</Svg>
	),
);
