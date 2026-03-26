# Reference Maps for Cartographer

This directory contains reference examples of high-quality fantasy maps. The Cartographer views these during Phase 4 (Visual Analysis) to understand what constitutes good map quality and to benchmark its own work.

## Reference 1: Fantasy World Map (fantasy-map-reference-1.jpg)

**Source:** https://i.redd.it/7hjcyoohz5ub1.jpg

**Download:** Reference map images are not stored in git (too large). Download with:
```bash
curl -L -o data/reference-maps/fantasy-map-reference-1.jpg "https://i.redd.it/7hjcyoohz5ub1.jpg"
```

### What Makes This Map Good

#### Region Definition
- **Distinct color coding** for different terrain types (forests, plains, deserts, tundra)
- **Natural boundaries** following geographic features (coastlines, mountain ranges, forests)
- **Clear region names** (Aeropa, Sukatar, Novia, Incognita, Khemei) placed prominently within territories
- **Topographical detail** showing elevation, vegetation, and terrain variation

#### Settlement Placement
- **Visual hierarchy** - capital cities are larger/more prominent than towns
- **Excellent spacing** - no overlapping settlement markers
- **Strategic positioning** - settlements near coastlines, rivers, and trade routes
- **Readable labels** - settlement names clearly visible without collisions

#### Label Quality
- **Region labels**: Large, centered within territory, uses elegant font
- **Settlement labels**: Smaller, positioned near markers with clear offset
- **Geographic features**: Seas, bays, and water bodies clearly labeled
- **No overlaps** between any labels (region, settlement, or geographic)

#### Visual Composition
- **Balanced layout** - continents and regions distributed across canvas
- **Clear water/land contrast** - ocean is distinct pale blue/gray
- **Legend included** - scale and symbols shown in corner
- **Consistent style** - cohesive artistic treatment throughout

#### Specific Techniques to Learn

1. **Label offset strategy**: Settlement labels are positioned at consistent angle (upper-right) from markers
2. **Region label sizing**: Larger regions get proportionally larger text
3. **Color harmony**: Terrain colors are muted and harmonious (greens, tans, grays)
4. **Marker distinctiveness**: Capital cities use different icon than towns
5. **White space usage**: Ocean areas provide breathing room, labels not crowded
6. **Terrain texture**: Forests, mountains, and deserts have distinct visual patterns

### How Cartographer Should Use This Reference

**During Phase 4 (Visual Analysis):**

1. **View this reference before analyzing current snapshot**
2. **Compare specific aspects:**
   - Are my region labels as clearly positioned?
   - Is my settlement spacing as clean?
   - Do my region boundaries follow geographic logic?
   - Are my colors as distinct and harmonious?
   - Is my label hierarchy as clear?

3. **Identify specific improvements:**
   - "Reference shows region labels centered in polygons; mine is offset to edge"
   - "Reference maintains 50+ unit spacing between settlements; mine has clustering in Ashen Dominion"
   - "Reference uses label offsets consistently; mine has inconsistent angles"

4. **Prioritize fixes based on reference:**
   - High priority: Label collisions (reference has zero)
   - Medium priority: Spacing violations (reference maintains generous spacing)
   - Lower priority: Polygon refinement (reference follows natural boundaries)

### Quality Benchmarks from This Reference

| Aspect | Reference Standard | Target for Aethermourne |
|--------|-------------------|------------------------|
| Settlement spacing | 50+ pixels between markers | 20+ units minimum (scale adjusted) |
| Label collisions | Zero overlaps | Zero overlaps |
| Region label position | Centered in territory | Within polygon boundaries |
| Settlement label offset | Consistent upper-right | Offset from marker, no overlap |
| Color distinction | High contrast between regions | Clear visual separation |
| Polygon boundaries | Follow terrain features | Match lore geography |
| Visual hierarchy | Capital > city > town clear | Type-based sizing clear |

---

## Adding More References

To add additional reference maps:

1. Download image to this directory
2. Name descriptively: `[style]-reference-[N].[ext]`
3. Document in this README:
   - Source URL
   - What makes it good
   - Specific techniques to learn
   - Quality benchmarks

Good reference types to add:
- **Detailed regional map** (zoomed-in view with high detail)
- **Minimalist style** (clean, simple, clear hierarchy)
- **Topographic style** (elevation-focused)
- **Political map** (boundary-focused, less terrain detail)
