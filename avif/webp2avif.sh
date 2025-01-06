#!/bin/bash
input_dir="input"
output_dir="output"

mkdir -p "$output_dir"

for file in "$input_dir"/*.webp; do
    filename=$(basename -- "$file")
    filename_no_ext="${filename%.*}"

    ffmpeg -i "$file" -c:v libaom-av1 -pix_fmt yuv420p10 -crf 30 "$output_dir/${filename_no_ext}.avif"

    if [ $? -eq 0 ]; then
        echo "Successfully converted $file to $output_dir/${filename_no_ext}.avif"
    else
        echo "Failed to convert $file"
    fi
done